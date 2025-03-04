import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Header searchTerm={""} setSearchTerm={() => { }} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <div className="max-w-4xl w-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We collect information that you provide to us directly, such as when you create an account, make a purchase, or contact customer support. This may include your name, email address, phone number, and payment information.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We use your information to provide and improve our services, process transactions, communicate with you, and personalize your experience. We may also use your information for marketing purposes with your consent.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners and service providers to help us operate our business and provide services to you.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Security</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no online service is completely secure, so please use caution when sharing your information.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Choices</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        You have the right to access, update, or delete your personal information. You can also opt out of receiving marketing communications from us at any time.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at support@example.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
