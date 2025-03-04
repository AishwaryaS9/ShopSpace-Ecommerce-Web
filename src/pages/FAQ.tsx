import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
    return (
        <div>
            <Header searchTerm={""} setSearchTerm={() => { }} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <div className="max-w-4xl w-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. What is this website about?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ligula non lectus bibendum, ut dictum elit feugiat.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. What payment methods do you accept?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisi vel odio venenatis vestibulum eget non lacus.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How do I contact customer support?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla est ac ipsum hendrerit, id blandit neque convallis.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Can I track my order?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisi ut arcu elementum varius vitae nec justo.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Do you offer international shipping?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac dolor eget odio fringilla laoreet in at eros.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. What is your return policy?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. How do I check the status of my refund?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lorem nec arcu faucibus, ut laoreet sapien hendrerit.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Are the products covered by a warranty?</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac turpis at odio dictum fermentum.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
