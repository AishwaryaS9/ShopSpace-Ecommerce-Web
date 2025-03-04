import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div>
            <Header searchTerm={""} setSearchTerm={() => { }} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <div className="max-w-4xl w-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Customer Support</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            For inquiries related to orders, shipping, or our products, you can reach our customer support team at:
                        </p>
                        <p className="text-gray-700 font-medium">Email: support@example.com</p>
                        <p className="text-gray-700 font-medium">Phone: +1-234-567-890</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Business Inquiries</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            For partnerships, collaborations, or business-related inquiries, contact us at:
                        </p>
                        <p className="text-gray-700 font-medium">Email: business@example.com</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Office Address</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            You can also visit us at our office during business hours:
                        </p>
                        <p className="text-gray-700 font-medium">123 Main Street, Suite 100, Cityville, ST 56789</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Working Hours</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Our team is available to assist you during the following hours:
                        </p>
                        <p className="text-gray-700 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700 font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-700 font-medium">Sunday: Closed</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feedback</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            We value your feedback! Please feel free to share your thoughts or suggestions with us at:
                        </p>
                        <p className="text-gray-700 font-medium">Email: feedback@example.com</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
