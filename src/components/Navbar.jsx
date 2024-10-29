import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';  // Import the BookingModal component
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleBookingSubmit = (formData) => {
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <nav className="bg-white shadow-md relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                src="https://shahfuneralservice.in/images/logo-antim-sanskar-seva.png"
                                alt="Tribute Services Logo"
                                className="h-12 w-auto" // Ensures the logo is responsive
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
                            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>

                            {/* Desktop Services Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <span>Services</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

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

                            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                            >
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
                                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</a>
                                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</Link>

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

                                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Contact</Link>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full mt-2 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleBookingSubmit}
            />
        </>
    );
};

export default Navbar;
