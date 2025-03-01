import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: any) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/productdescription/${product?.id}`)
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
            <button className="px-4 py-2 bg-ashBrown text-white font-medium rounded-md w-full hover:bg-lightCopper">
                Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;
