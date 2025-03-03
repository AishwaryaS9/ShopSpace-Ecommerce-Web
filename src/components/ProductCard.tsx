import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart } from '../store/slice/cartSlice';
import { selectCartItems } from "../store/slice/cartSlice";


const ProductCard = ({ product }: any) => {

    const [isAddToCart, setIsAddToCart] = useState(false);
    // const cartItem = useAppSelector((state) => state.cart.items)

    const cartItems = useAppSelector(selectCartItems);
    // console.log('cart item', cartItems)

    useEffect(() => {
        const isProductInCart = cartItems.some((item: any) => item.id === product.id);
        setIsAddToCart(isProductInCart); 
    }, [cartItems, product.id]);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleCardClick = () => {
        navigate(`/productdescription/${product?.id}`)
    }

    const handleAddToCart = (event: any) => {
        event.stopPropagation();
        if (product) {
            // dispatch(addToCart(product));
            dispatch(addToCart({ ...product, quantity: 1 }));
            setIsAddToCart(true); 
        }
    };

    const handleGoToCart = (event: any) => {
        event.stopPropagation();
        navigate(`/cart`)
    }

    return (
        <div onClick={handleCardClick}
            className="p-4 flex flex-col items-center justify-between h-[400px] bg-white ">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
            />
            <h3
                className="text-base font-semibold text-gray-800 text-center mb-2 line-clamp-2 text-ellipsis"
            >
                {product.title}
            </h3>
            <div className="flex flex-col items-center gap-2 mb-3 flex-grow">
                <div className="text-lg font-extrabold text-lightCopper">
                    ${product.price}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                        ({product.rating?.count})
                    </span>
                </div>
            </div>
            {isAddToCart ? (
                <button onClick={handleGoToCart} className="px-4 py-2 bg-ashBrown text-white font-medium rounded-md w-full hover:bg-lightCopper">
                    Go To Cart
                </button>
            ) : (
                <button onClick={handleAddToCart} className="px-4 py-2 bg-ashBrown text-white font-medium rounded-md w-full hover:bg-lightCopper">
                    Add To Cart
                </button>
            )}

        </div>
    );
};

export default ProductCard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
// import { addToCart } from '../store/slice/cartSlice';
// import { selectCartItems } from "../store/slice/cartSlice";

// const ProductCard = ({ product }: any) => {
//     const cartItems = useAppSelector(selectCartItems); // Get cart items from the store
//     const [isAddToCart, setIsAddToCart] = useState(false);

//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();

 
//     useEffect(() => {
//         const isProductInCart = cartItems.some((item: any) => item.id === product.id);
//         setIsAddToCart(isProductInCart); 
//     }, [cartItems, product.id]);

//     const handleCardClick = () => {
//         navigate(`/productdescription/${product?.id}`);
//     };

//     const handleAddToCart = (event: any) => {
//         event.stopPropagation();
//         if (product) {
//             dispatch(addToCart({ ...product, quantity: 1 }));
//             setIsAddToCart(true); // Set to true after adding the product to the cart
//         }
//     };

//     const handleGoToCart = (event: any) => {
//         event.stopPropagation();
//         navigate(`/cart`);
//     };

//     return (
//         <div
//             onClick={handleCardClick}
//             className="p-4 flex flex-col items-center justify-between h-[400px] bg-white"
//         >
//             <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-contain mb-3"
//             />
//             <h3
//                 className="text-base font-semibold text-gray-800 text-center mb-2 line-clamp-2 text-ellipsis"
//             >
//                 {product.title}
//             </h3>
//             <div className="flex flex-col items-center gap-2 mb-3 flex-grow">
//                 <div className="text-lg font-extrabold text-lightCopper">${product.price}</div>
//                 <div className="flex items-center gap-2">
//                     <span className="text-sm text-gray-500">({product.rating?.count})</span>
//                 </div>
//             </div>
//             {isAddToCart ? (
//                 <button
//                     onClick={handleGoToCart}
//                     className="px-4 py-2 bg-ashBrown text-white font-medium rounded-md w-full hover:bg-lightCopper"
//                 >
//                     Go To Cart
//                 </button>
//             ) : (
//                 <button
//                     onClick={handleAddToCart}
//                     className="px-4 py-2 bg-ashBrown text-white font-medium rounded-md w-full hover:bg-lightCopper"
//                 >
//                     Add To Cart
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ProductCard;
