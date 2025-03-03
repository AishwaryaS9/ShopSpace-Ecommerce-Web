import { useNavigate, useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const { orderId } = useParams();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto mt-8 overflow-hidden">
            <div className="bg-gray-800 h-1.5 rounded-t-md"></div>

            <div className="relative overflow-hidden h-[467px]">
                <div className="bg-gray-800 h-1.5 rounded-b-md z-0"></div>
                <div className="absolute z-10 bg-white h-[447px] mx-3 -mt-3 animate-[print_1.8s_cubic-bezier(0.68,-0.55,0.265,0.9)]">
                    <div className="m-3 p-6">
                        <div className="mx-auto w-18 h-18 bg-green-700 text-white flex items-center justify-center rounded-full text-4xl mb-4">
                            &#10004;
                        </div>
                        <div className="text-center text-gray-600 font-bold text-lg mb-4">
                            Payment Complete
                        </div>
                        <div className="text-center text-gray-500 text-sm leading-6 mb-6">
                            We've received your 'pay' payment.<br />
                            Order confirmed. Thank you for choosing us. Enjoy your food!
                        </div>
                        <div className="text-center text-gray-800 font-bold">
                            <div className="text-lg mb-2">Order ID</div>
                            <div className="border-t border-b border-gray-300 py-2 text-lg">
                                {orderId}
                            </div>
                        </div>
                        <div
                            className="text-center text-gray-500 font-bold text-sm mt-6 cursor-pointer"
                            onClick={handleClose}
                        >
                            You can close this page!
                        </div>
                    </div>
                    <div className="relative h-5 w-full -mt-px bg-gradient-to-br from-white via-transparent to-white bg-[length:16px_40px] bg-[position:0_-20px]"></div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
