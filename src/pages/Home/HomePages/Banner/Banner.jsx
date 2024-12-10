import React from 'react';
import bannerImg from '../../../../assets/images/banner2.jpg'

const Banner = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left md:max-w-lg">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Discover the Future of <span className="text-yellow-400">Gadgets</span>
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Upgrade your lifestyle with our latest collection of smart gadgets. Experience innovation at your fingertips.
                    </p>
                    <button className="inline-block bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300">
                        Shop Now
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="mt-8 md:mt-0">
                    <img
                        src={bannerImg}
                        alt="Latest Gadget"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-xl"
                    />
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>
        </section>
    );
}

export default Banner;
