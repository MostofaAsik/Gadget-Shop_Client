import React from 'react';
import ProductCard from './ProductCard ';



const products = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkHpbU52QscEaFF6ph4_i6nGLtC2cTpxYqg&s',
        title: 'Smart Watch X200',
        description: 'Stay connected and track your health with this all-in-one smart device.',
        price: '199.99',
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsh2PzFCEhhO8kNqF8I5NHJY5hJ10Eju-nRA&s',
        title: 'Wireless Earbuds Pro',
        description: 'Experience crystal-clear sound and noise cancellation with these sleek earbuds.',
        price: '149.99',
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcO8fEXiheV-iQ88U2NUCJBpUqaVCUlfzoA&s',
        title: 'Bluetooth Speaker Max',
        description: 'Bring your music to life with deep bass and immersive sound.',
        price: '89.99',
    },
    {
        id: 4,
        image: 'https://uniquegadget.com.bd/wp-content/uploads/2022/08/Amazfit-Band-7-Smart-Fitness-Tracker-Unique-Gadget-BD.webp',
        title: 'Fitness Tracker Band',
        description: 'Track your daily activity, sleep, and health goals in one smart band.',
        price: '49.99',
    },

];

const FeaturedProducts = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-10">
                    Featured Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
