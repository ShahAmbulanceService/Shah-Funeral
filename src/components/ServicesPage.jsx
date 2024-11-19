import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import scrollToTop from '../hooks/useScrollEffect';
import servicesData from '../data/services.json';

const ServicePage = () => {
    const location = useLocation();
    const { serviceId } = location.state || {};
    const [service, setService] = useState(null);

    useEffect(() => {
        // Fetch the service based on the serviceId
        if (serviceId) {
            const foundService = servicesData.services.find((s) => s.id === serviceId);
            setService(foundService);
        }
    }, [serviceId]);

    if (!service) {
        return <p>Service not found.</p>; // Handle case where service doesn't exist
    }

    const { image, title, description, content } = service;

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                    {/* Hero Image */}
                    <div className="w-full h-64 md:h-96 mb-6 relative">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Introduction Text */}
                    <p className="text-gray-700 mb-6">{description}</p>

                    {/* Services List */}
                    <div className="space-y-6">
                        {content && content.map((item, index) => (
                            <ServiceItem key={index} title={item.t1} description={item.desc} />
                        ))}
                    </div>
                </div>

                {/* Sidebar - Takes up 1 column on large screens */}
                <div className="lg:col-span-1">
                    {/* Call Back Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-xl font-semibold mb-4">Request a Call Back</h2>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Enter Mobile Number"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Captcha"
                                    className="flex-grow p-2 border border-gray-300 rounded"
                                    required
                                />
                                <div className="bg-orange-500 text-white p-2 rounded w-20 flex items-center justify-center">
                                    7b/216
                                </div>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Other Services */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Other Services</h2>
                        <ul className="space-y-3">
                            {servicesData.services.map((otherService) => (
                                <ServiceLink key={otherService.id} text={otherService.title} id={otherService.id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const ServiceItem = ({ title, description }) => (
    <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

const ServiceLink = ({ text, id }) => (
    <li>
        <Link
            to="/service"
            state={{ serviceId: id }}
            onClick={scrollToTop}
            className="text-gray-700 hover:text-orange-500 transition-colors"
        >
            {text}
        </Link>
    </li>
);

export default ServicePage;
