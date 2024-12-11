import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const products = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/vmzYHHC/3-Smart-Watch-X200.jpg',
        title: 'Smart Watch X200',
        price: '$199.99',
    },
    {
        id: 2,
        image: 'https://i.ibb.co.com/2SNf7Ts/0-Wireless-Earbuds-Pro.jpg',
        title: 'Wireless Earbuds Pro',
        price: '$149.99',
    },
    {
        id: 3,
        image: 'https://i.ibb.co.com/2SNf7Ts/0-Wireless-Earbuds-Pro.jpg',
        title: 'Bluetooth Speaker Max',
        price: '$89.99',
    },
    {
        id: 4,
        image: 'https://i.ibb.co.com/2SNf7Ts/0-Wireless-Earbuds-Pro.jpg',
        title: 'Fitness Tracker Band',
        price: '$49.99',
    },
    {
        id: 5,
        image: 'https://i.ibb.co.com/vmzYHHC/3-Smart-Watch-X200.jpg',
        title: 'Portable Charger 20000mAh',
        price: '$39.99',
    },
    {
        id: 6,
        image: 'https://i.ibb.co.com/vmzYHHC/3-Smart-Watch-X200.jpg',
        title: 'Smartphone Lens Kit',
        price: '$29.99',
    },
];

const HotProducts = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-10">
                    🔥 Hot Products
                </h1>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden h-[400px] flex flex-col">
                                {/* Product Image */}
                                <div className="relative group">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800 mb-2">
                                            {product.title}
                                        </h2>
                                        <p className="text-xl font-bold text-blue-600">
                                            {product.price}
                                        </p>
                                    </div>

                                    <button
                                        className="mt-4 w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HotProducts;

