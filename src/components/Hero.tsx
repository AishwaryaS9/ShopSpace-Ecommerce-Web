import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="flex h-screen w-full relative py-0">
                <div className="flex-1 bg-darkColor"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-[60%] md:max-w-[80%] sm:max-w-[90%]">
                    <h1 className="lg:text-6xl leading-[32px] md:text-4xl font-bold text-gray-800 mb-4 sm:text-2xl">
                        Explore <span className="underline">ShopSpace</span> <br />Your Hub for Exclusive Finds
                    </h1>
                    <p className="text-lg lg:text-2xl text-gray-500 sm:text-sm">
                        Discover a curated selection of products tailored to your needs. Shop effortlessly and find exactly what you want.
                    </p>
                </div>
                <div className="flex-1 bg-lightcolor"></div>
            </section>

            <section className="bg-ashBrown text-white py-16 px-8">
                <div className="mx-auto pl-5">
                    <h2 className="text-2xl font-bold mb-4 sm:text-xl">
                        Discover Your Next Favourite Item
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed sm:text-sm">
                        Browse our exclusive collection and find the perfect product tailored just for you.
                    </p>
                    <div className="flex gap-4">
                        <button className="text-black bg-white text-base py-3 px-8 rounded-lg border-2 
            border-white transition-colors duration-300 hover:bg-gray-100">
                            Shop
                        </button>
                        <button className="text-white bg-transparent text-base py-3 px-8 rounded-lg border-2 border-white transition-colors duration-300 hover:bg-white hover:text-black">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;