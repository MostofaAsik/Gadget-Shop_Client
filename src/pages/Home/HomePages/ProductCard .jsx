import React from 'react';

const ProductCard = ({ image, title, description, price }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                        ${price}
                    </span>
                    <button
                        className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
