import React from 'react';
import UserReview from './UserReview';


function Review() {
    const reviews = [
        {
            id: 1,
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkHpbU52QscEaFF6ph4_i6nGLtC2cTpxYqg&s',
            buyerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7CH2bTx8kyDAU6Zc6rR0fX2X_4NGiANCTw&s',
            productName: 'Smart Watch X200',
            rating: 5,
        },
        {
            id: 2,
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsh2PzFCEhhO8kNqF8I5NHJY5hJ10Eju-nRA&s',
            buyerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvLRtA5t4W2uOSkbMdg2mPGt7gm4IQ7hyEA&s',
            productName: 'Wireless Earbuds Pro',
            rating: 4,
        },
        {
            id: 3,
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcO8fEXiheV-iQ88U2NUCJBpUqaVCUlfzoA&s',
            buyerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF5ACUpC_BsOD5ntbFmDq4KC2xCESbHoMwQ&s',
            productName: 'Bluetooth Speaker Max',
            rating: 3,
        },
        {
            id: 4,
            productImage: 'https://uniquegadget.com.bd/wp-content/uploads/2022/08/Amazfit-Band-7-Smart-Fitness-Tracker-Unique-Gadget-BD.webp',
            buyerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF5ACUpC_BsOD5ntbFmDq4KC2xCESbHoMwQ&s',
            productName: 'Fitness Tracker Band',
            rating: 3,
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <h1 className="text-3xl font-bold text-center mb-10">
                User Reviews
            </h1>

            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {reviews.map((review) => (
                    <UserReview
                        key={review.id}
                        productImage={review.productImage}
                        buyerImage={review.buyerImage}
                        productName={review.productName}
                        rating={review.rating}
                    />
                ))}
            </div>
        </div>
    );
}

export default Review;
