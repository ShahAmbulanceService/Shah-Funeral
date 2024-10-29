import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const services = [
        'Funeral Arrangement',
        'Cremation Service',
        'Pandir for Funeral',
        'Asthi Visarjan',
        'Chautha And Tehravin',
        'Prayer Hall Service',
        'Dead Body Transport Service',
        'Dead Body Freezer Box',
        'Antim Sanskar Samagri',
    ];

    return (
        <nav className="bg-white shadow-md relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center gap-2">
                            <div className="text-blue-600 font-bold text-2xl">
                                Tribute
                                <span className="text-orange-500">Services</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-orange-500">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">
                            About
                        </a>

                        {/* Desktop Services Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Desktop Dropdown Menu */}
                            <div
                                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
                  ${isServicesOpen ? 'block' : 'hidden'}`}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <div className="py-1">
                                    {services.map((service, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                        >
                                            {service}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#" className="text-gray-700 hover:text-orange-500">
                            Contact
                        </a>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                                Home
                            </a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                                About
                            </a>

                            {/* Mobile Services Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-orange-500"
                                >
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesOpen && (
                                    <div className="bg-gray-50 px-4">
                                        {services.map((service, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                                            >
                                                {service}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                                Contact
                            </a>
                            <button className="w-full mt-2 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                                Book Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
