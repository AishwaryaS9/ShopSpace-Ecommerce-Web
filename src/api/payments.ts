import axios from "axios";

// Place Order
export async function create_StripePaymentIntent(cartDetails: any, orderID: any) {

    const url = `http://localhost:5000/api/v1/payments/pay-session`;
    try {
        const response = await axios.post(url, {
            products: cartDetails,
            orderId: orderID
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response;
    } catch (error: any) {
        console.log('error', error)
        throw new Error(error.response?.data?.message || "An error occurred while placing the order.");
    }
}



