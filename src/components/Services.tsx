import { JSX } from 'react'
import Images from '../assets/images';

type Service = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const Services = () => {
    const servicesData: Service[] = [
        {
            icon: <img src={Images.truckicon} />,
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
        },
        {
            icon: <img src={Images.headphoneicon} />,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: <img src={Images.securityicon} />,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
        },
    ];


    return (
        <section className="py-12 bg-qhite text-center">
            <hr className="my-4 border-gray-300" />
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mt-4 
            sm:grid-cols-2 lg:grid-cols-3">
                {servicesData.map((service, index) => (
                    <div key={index} className="p-6 flex flex-col items-center text-center">
                        <div className="bg-ashBrown text-white p-4 rounded-full mb-4 relative z-10 shadow-[0_0_0_5px_rgba(233,233,233,1),_0_0_0_10px_rgba(233,233,233,1)]">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services