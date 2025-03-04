import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import Header from '../components/Header';
import { addToCart, selectCartItems } from '../store/slice/cartSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Footer from '../components/Footer';

interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number | any;
    rating: {
        count: number;
        rate: number | any;
    };
    title: string;
}

const ProductDescription = () => {
    const { productId }: any = useParams();

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartItems = useAppSelector(selectCartItems);

    const fetchProductsById = async () => {
        try {
            const response = await getProductById(productId);
            if (response) {
                setProduct(response);
            } else {
                console.error("Failed to get product");
            }
        } catch (error) {
            console.error("Failed to get product", error);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchProductsById();
            const productInCart = cartItems.find((item: any) => item.id === parseInt(productId, 10));
            if (productInCart) {
                setQuantity(productInCart.quantity);
            }
        }
    }, [cartItems, productId]);

    const renderStars = (rating: any) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`text-yellow-400 ${i < rating ? '' : 'text-gray-300'}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    const handleAddToCart = () => {
        const existingItem = cartItems.find((item: any) => item.id === parseInt(productId, 10));

        const finalQuantity = existingItem ? quantity : quantity;

        if (product) {
            dispatch(addToCart({ ...product, quantity: finalQuantity }));
            navigate('/cart');
        }
    };


    return (
        <div>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-600 mb-4 self-start hover:underline"
                >
                    &larr; Back
                </button>
                <div className=" max-w-4xl w-full p-6 ">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 flex justify-center items-center rounded-lg p-4">
                            <img
                                src={product?.image}
                                alt={product?.title}
                                className="w-full max-w-sm object-contain"
                            />
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product?.title}</h1>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-700 mr-2">Rating:</span>
                                {renderStars(Math.round(product?.rating?.rate))}
                                <span className="text-gray-500 text-sm ml-2">
                                    ({product?.rating?.count} reviews)
                                </span>
                            </div>
                            <p className="text-xl font-semibold text-gray-900 mb-4">${product?.price}</p>
                            <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                {product?.description}
                            </p>
                            <hr className="mb-6" />

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-lg overflow-hidden">
                                    <button
                                        className="px-4 py-2 bg-blushWhite hover:bg-lightcolor"
                                        onClick={handleDecrease}
                                    >
                                        -
                                    </button>
                                    <span className="px-6 py-2 text-gray-700">{quantity}</span>
                                    <button
                                        className="px-4 py-2 bg-blushWhite hover:bg-lightcolor"
                                        onClick={handleIncrease}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="flex-1 bg-ashBrown text-white py-2 px-4 rounded-lg hover:bg-lightCopper"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDescription;
