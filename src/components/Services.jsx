
    import { Link } from "react-router-dom";
    import React from "react";
    import scrollToTop from "../hooks/useScrollEffect";
    import services from '../data/services.json'


    const Services = () => {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-left text-[#04083e]">
                    OUR SERVICES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.services.map((service) => (
                        <div
                            key={service.id}
                            className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 sm:h-48 md:h-32 object-cover"
                            />
                            <div className="p-4 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-gray-600 mb-4 text-center flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="relative inline-block group self-center">
                                    <Link
                                        to="/service"
                                        state={{serviceId : service.id}}
                                        className="text-orange-500 relative z-10"
                                        onClick={scrollToTop}
                                    >
                                        Read More
                                    </Link>

                                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default Services;