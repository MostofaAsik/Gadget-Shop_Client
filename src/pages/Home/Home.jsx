import React from 'react';
import Banner from './HomePages/Banner/Banner';
import FeaturedProducts from './HomePages/FeaturedProducts';
import Review from './HomePages/Review';
import HotProducts from './HomePages/HotProducts';



const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <HotProducts />
            <Review />
        </div>
    );
};

export default Home;