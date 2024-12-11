import React from 'react';

const UserReview = ({ productImage, buyerImage, productName, rating }) => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.35 4.162a1 1 0 00.95.69h4.383a1 1 0 01.592 1.806l-3.553 2.58a1 1 0 00-.364 1.118l1.35 4.162a1 1 0 01-1.54 1.118L10 15.347l-3.553 2.58a1 1 0 01-1.54-1.118l1.35-4.162a1 1 0 00-.364-1.118L2.34 9.585a1 1 0 01.592-1.806h4.383a1 1 0 00.95-.69l1.35-4.162z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative group">
                <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
                />
            </div>

            <div className="p-4">

                <div className="flex items-center mb-4">
                    <img
                        src={buyerImage}
                        alt="Buyer"
                        className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <h3 className="ml-4 text-lg font-semibold text-gray-800">
                        {productName}
                    </h3>
                </div>


                <div className="flex items-center">
                    {renderStars(rating)}
                </div>
            </div>
        </div>
    );
};

export default UserReview;
