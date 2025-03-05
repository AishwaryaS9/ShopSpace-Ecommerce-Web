import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    return (
        <div>
            <Header searchTerm={""} setSearchTerm={() => { }} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <div className="max-w-4xl w-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dui id ante volutpat, ut convallis purus vulputate. Proin nec velit nunc.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis urna at mi sollicitudin, vel lacinia turpis pellentesque. Sed elementum lectus id lectus tempor, ac tincidunt ligula convallis. Quisque pharetra vel nunc non dignissim.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum neque ut metus placerat, in dapibus elit posuere. Duis vitae arcu non odio fermentum vulputate.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo nisl. Phasellus at lorem accumsan, iaculis ligula eu, ultricies odio. Cras convallis fermentum justo in ultrices.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id est id turpis sodales facilisis. Vivamus lacinia ligula a nulla congue, nec eleifend eros aliquam.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
