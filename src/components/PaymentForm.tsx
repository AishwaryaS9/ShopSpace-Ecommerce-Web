import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { create_StripePaymentIntent } from "../api/payments";
import { useNavigate } from "react-router-dom";
import { setUserAddress } from "../store/slice/userSlice";
import { clearCart } from "../store/slice/cartSlice";

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
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        email: "",
        contactNumber: ""
    });

    const cartItems = useAppSelector((state) => state.cart.items);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY
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
                    color: "#333",
                    fontFamily: "'Inter', sans-serif",
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#a0aec0",
                    },
                },
                invalid: {
                    color: "#e53e3e",
                    iconColor: "#e53e3e",
                },
            },
        });

        card.mount("#card-element");
        setCardElement(card);

        createPaymentIntent();

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
                setClientSecret(paymentIntent?.data?.client_secret);
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

        setLoading(true);

        try {
            dispatch(setUserAddress(billingDetails));

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret.toString(), {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: billingDetails.name,
                        address: {
                            line1: billingDetails.address,
                            city: billingDetails.city,
                            state: billingDetails.state,
                            postal_code: billingDetails.postalCode,
                            country: billingDetails.country,
                        },
                    },
                },
            });


            if (error) {
                navigate(`/paymentfailure/${orderID}`);
            } else if (paymentIntent && paymentIntent.status === "succeeded") {
                dispatch(clearCart());
                navigate(`/paymentsuccess/${orderID}`);
            }
        } catch (err) {
            console.error("Error processing payment:", err);
            alert("An error occurred during payment processing.");
            navigate("/paymentfailure/1");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handlePayment} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Billing Details</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={billingDetails.name}
                    onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
                    className="w-full border border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Street Address"
                    value={billingDetails.address}
                    onChange={(e) => setBillingDetails({ ...billingDetails, address: e.target.value })}
                    className="w-full border border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="City"
                        value={billingDetails.city}
                        onChange={(e) => setBillingDetails({ ...billingDetails, city: e.target.value })}
                        className="border-gray-300 border focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="State"
                        value={billingDetails.state}
                        onChange={(e) => setBillingDetails({ ...billingDetails, state: e.target.value })}
                        className="border-gray-300 border focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={billingDetails.postalCode}
                        onChange={(e) => setBillingDetails({ ...billingDetails, postalCode: e.target.value })}
                        className="border-gray-300 border focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={billingDetails.country}
                        onChange={(e) => setBillingDetails({ ...billingDetails, country: e.target.value })}
                        className="border-gray-300 border focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={billingDetails.email}
                        onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
                        className="w-full border border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        value={billingDetails.contactNumber}
                        onChange={(e) => setBillingDetails({ ...billingDetails, contactNumber: e.target.value })}
                        className="w-full border border-gray-300 focus:ring-green-500 focus:border-green-500 rounded-md p-2"
                        required
                    />
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h2>
                <div
                    id="card-element"
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-green-500 focus:border-green-500"
                ></div>
            </div>
            <button
                type="submit"
                className={`w-full bg-green-500 text-white py-3 rounded-lg font-medium transition ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-600"
                    }`}
                disabled={!clientSecret || loading}
            >
                {loading ? (
                    <span className="animate-spin inline-block h-5 w-5 border-t-2 border-white rounded-full"></span>
                ) : (
                    `Pay $${totalAmount}`
                )}
            </button>
        </form>
    );
};

export default PaymentForm;
