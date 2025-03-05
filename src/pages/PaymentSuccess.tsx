import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearAddress } from '../store/slice/userSlice';
import { useEffect } from 'react';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const { orderId } = useParams();

    const dispatch = useAppDispatch();
    const address = useAppSelector((state: any) => state?.user?.address);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleClose = () => {
        dispatch(clearAddress());
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md my-4 bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-green-600 h-2"></div>
                    <div className="p-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-green-100 text-green-600 flex items-center justify-center rounded-full shadow-md mb-6 relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-4-4 1.414-1.414L11 14.172l5.586-5.586L18 10l-7 7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Payment Successful</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Thank you for your payment! Your order has been confirmed. We appreciate your trust in us.
                            </p>

                            <div className="w-full">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Order ID</h3>
                                <div className="bg-gray-100 border border-gray-300 text-gray-800 py-3 px-4 rounded-md mb-6 ">
                                    {orderId}
                                </div>
                            </div>

                            <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Details</h2>

                            {address ? (
                                <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-left">
                                    <div className="flex items-center mb-2">
                                        <span className="font-medium text-lg">{address?.name || "No Name Provided"}</span>
                                    </div>

                                    <h2 className="text-md font-medium text-gray-800 mb-4 mt-4">Billing Address</h2>
                                    <div className="flex items-center mb-2">
                                        <span>{address?.address || "No Address Provided"}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span>{`${address?.city || "No City"}, ${address?.state || "No State"}, ${address?.postalCode || "No Postal Code"}`}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span>{address?.country || "No Country Provided"}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="font-medium">Email:</span>
                                        <span className="ml-2">{address?.email || "No Email Provided"}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="font-medium">Contact Number:</span>
                                        <span className="ml-2">{address?.contactNumber || "No Contact Number Provided"}</span>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-600 mb-4">No customer details available</p>
                            )}

                            <button
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 
                                rounded-lg shadow-lg transition-all duration-300 mt-6"
                                onClick={handleClose}
                            >
                                Close Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentSuccess;
