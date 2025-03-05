import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { clearCart, removeFromCart } from '../store/slice/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Images from '../assets/images';
import PaymentForm from '../components/PaymentForm';

const Cart = () => {
    const cartCount = useAppSelector((state) => state.cart.count);
    const cartItems = useAppSelector((state) => state.cart.items);

    const [searchTerm, setSearchTerm] = useState('');
    const [showPaymentForm, setShowPaymentForm] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (id: any) => {
        dispatch(removeFromCart({ id }));
    };

    const handleItemClick = (id: any) => {
        navigate(`/productdescription/${id}`);
    };


    return (
        <div className="flex flex-col min-h-screen">
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <button
                onClick={() => navigate(-1)}
                className="text-gray-600 mb-4 self-start px-4 py-2 hover:underline"
            >
                &larr; Back
            </button>
            <div className="my-8 flex-grow p-6">

                <div className="cart-header p-4 flex justify-between items-center bg-gray-100 border-b rounded-t-lg max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="cart-body p-6 max-w-3xl mx-auto border rounded-b-lg">
                    {cartCount === 0 ? (
                        <p className="text-gray-500 text-center">Your cart is empty.</p>
                    ) : (
                        <div>
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item: any) => (
                                    <li key={item.id} onClick={() => handleItemClick(item.id)}
                                        className="flex justify-between items-center py-4">
                                        <div className="flex items-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 h-16 rounded-md mr-4 object-cover border"
                                            />
                                            <div className='flex flex-col '>
                                                <span className="font-medium  text-gray-800 mr-4">{item.title}</span>
                                                <span className="font-medium text-gray-800 mr-4">Quantity: {item.quantity}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <span className="text-gray-600 font-semibold mr-4">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <img
                                                src={Images.clearicon}
                                                alt={item.title}
                                                className="cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveItem(item.id);
                                                }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="total mt-6 flex justify-between items-center border-t pt-4">
                                <strong className="text-lg font-semibold">Total:</strong>
                                <span className="text-lg font-semibold text-gray-800">
                                    ${cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0).toFixed(2)}
                                </span>
                            </div>

                            <div className="checkout mt-6">
                                {showPaymentForm ? (
                                    <PaymentForm totalAmount={cartItems.reduce((total: any, item: any) => total + item.price * item.quantity, 0).toFixed(2)} />
                                ) : (
                                    <button
                                        onClick={() => setShowPaymentForm(true)}
                                        className="bg-green-500 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-green-600 transition"
                                    >
                                        Proceed to Checkout
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
