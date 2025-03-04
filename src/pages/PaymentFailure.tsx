import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearAddress } from '../store/slice/userSlice';

const PaymentFailure = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const address = useAppSelector((state: any) => state?.user?.address);
    const dispatch = useAppDispatch();

    const handleRetryPayment = () => {
        dispatch(clearAddress());
        navigate('/cart')
    }

    return (
        <>
            <div className="px-4 py-2 bg-gray-50">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-600 self-start hover:underline "
                >
                    &larr; Back
                </button>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 ">

                <div className="w-full max-w-md bg-white shadow-2xl rounded-lg overflow-hidden">
                    <div className="bg-red-600 h-2"></div>
                    <div className="p-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-red-100 flex items-center justify-center rounded-full shadow-lg mb-6 relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14 text-red-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Failed</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Unfortunately, your payment could not be processed. Please try again later or contact support.
                            </p>

                            <div className="w-full mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Order ID</h3>
                                <div className="bg-gray-100 border border-gray-300 text-gray-800 py-3 px-4 rounded-md">
                                    {orderId}
                                </div>
                            </div>


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
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold 
                               my-3 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                                onClick={handleRetryPayment}
                            >
                                Retry Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentFailure;
