import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { create_StripePaymentIntent } from "../api/payments";
import { useNavigate } from "react-router-dom";

declare global {
    interface Window {
        Stripe?: any;
    }
}

const PaymentForm = ({ totalAmount }: { totalAmount: number }) => {
    const [stripe, setStripe] = useState<any>(null);
    const [cardElement, setCardElement] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [orderID, setOrderID] = useState<string>("");

    const cartItems = useAppSelector((state) => state.cart.items);

    const navigate = useNavigate();

    useEffect(() => {

        const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
        if (!stripePublicKey) {
            console.error("Stripe public key is not defined in the environment variables");
            return;
        }

        const stripeInstance = window.Stripe(stripePublicKey);
        if (!stripeInstance) {
            console.error("Stripe.js not loaded");
            return;
        }



        setStripe(stripeInstance);

        const elements = stripeInstance.elements();
        const card = elements.create("card", {
            style: {
                base: {
                    color: "#32325d",
                    fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#aab7c4",
                    },
                },
                invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a",
                },
            },
        });

        card.mount("#card-element");
        setCardElement(card);

        createPaymentIntent();

        card.on("ready", () => {
            console.log("Card Element is ready");
        });

        return () => card.unmount();
    }, []);

    const generateOrderID = () => {
        const timestamp = Date.now(); 
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        return `ORD-${timestamp}-${randomNum}`;
    };

    const createPaymentIntent = async () => {
        const cartDetails = cartItems.map((item: any) => ({
            title: item.title,
            imageUrl: item.imageUrl,
            price: item.price,
            quantity: item.quantity,
        }));

        const newOrderID = generateOrderID();
        setOrderID(newOrderID);


        try {
            const paymentIntent = await create_StripePaymentIntent(cartDetails, orderID);

            if (paymentIntent?.data?.client_secret) {
                setClientSecret(() => {
                    return paymentIntent?.data?.client_secret
                })
            }
        } catch (error) {
            console.error("Failed to create payment intent:", error);
        }
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();


        if (!stripe || !cardElement || !clientSecret) {
            alert("Stripe is not fully initialized yet. Please wait and try again.");
            return;
        }

        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret.toString(), {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: "Customer Name",
                    },
                },
            });

            if (error) {
                alert(`Payment failed: ${error.message}`);
                navigate(`/paymentfailure/${orderID}`)
            } else if (paymentIntent && paymentIntent.status === "succeeded") {
                alert("Payment successful!");
                navigate(`/paymentsuccess/${orderID}`)

            }
        } catch (err) {
            console.error("Error processing payment:", err);
            alert("An error occurred during payment processing.");
            navigate('/paymentfailure/1')
        }
    };



    return (
        <form onSubmit={handlePayment} className="flex flex-col gap-4">
            {loading ? (
                <div className="text-gray-500 text-center">Loading payment form...</div>
            ) : (
                <>
                    <div id="card-element" className="border p-2 rounded">

                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-green-600 transition"
                        disabled={!clientSecret || loading}
                    >
                        Pay ${totalAmount}
                    </button>
                </>
            )}
        </form>
    );
};

export default PaymentForm;

