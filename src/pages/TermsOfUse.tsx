import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header searchTerm={""} setSearchTerm={() => { }} />
            <div className="min-h-screen bg-white flex flex-col items-center p-4">
                <div className="max-w-4xl w-full p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Welcome to our website. By accessing and using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        By using our services, you agree to comply with and be legally bound by these Terms of Use. If you do not agree to these terms, you are not authorized to use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Changes to Terms</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services constitutes acceptance of the updated terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Services</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations. You must not engage in any activity that could harm or disrupt our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        All content on our website, including text, images, graphics, and logos, is the property of our company or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We are not responsible for any direct, indirect, incidental, or consequential damages arising from your use of our services. Use our services at your own risk.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        We reserve the right to terminate or suspend your access to our services at any time, without prior notice, if you violate these terms or engage in any harmful activity.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If you have any questions or concerns about these Terms of Use, please contact us at support@example.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
