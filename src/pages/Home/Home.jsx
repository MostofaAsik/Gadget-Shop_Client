import React from 'react';
import Banner from './HomePages/Banner/Banner';
import FeaturedProducts from './HomePages/FeaturedProducts';
import Review from './HomePages/Review';



const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <Review />
        </div>
    );
};

export default Home;