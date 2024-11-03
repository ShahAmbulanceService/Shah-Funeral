import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';  // Import the BookingModal component
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { id: 1, name: 'Funeral Service' },
        { id: 2, name: 'Cremation Service' },
        { id: 3, name: 'Pandit for Funeral' },
        { id: 4, name: 'Asthi Visarjan' },
        { id: 5, name: 'Chautha And Tehravin' },
        { id: 6, name: 'Prayer Hall Service' },
        { id: 7, name: 'Dead Body Transport' },
        { id: 8, name: 'Freezer Box' },
        { id: 9, name: 'Antim Sanskar Samagri' },
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
                        <div className="flex-shrink-0 flex items-center space-x-4"> {/* Flex for horizontal alignment */}
                            <img
                                src={Logo}
                                alt="Tribute Services Logo"
                                className="h-20 w-auto" // Ensures the logo is responsive
                            />
                          
                        </div>




                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
                            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>

                            {/* Desktop Services Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                                    <span>Services</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <div
                                    className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
            ${isServicesOpen ? 'block' : 'hidden'}`}
                                    style={{ zIndex: 50 }}
                                    onMouseEnter={() => setIsServicesOpen(true)}  // Keep dropdown open when hovering over it
                                    onMouseLeave={() => setIsServicesOpen(false)} // Close dropdown when leaving
                                >
                                    <div className="py-1">
                                        {services.map((service) => (
                                            <Link
                                                key={service.id}
                                                to="/service"
                                                state={{ serviceId: service.id }}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                            >
                                                {service.name}
                                            </Link>
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
                                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
                                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</Link>

                                {/* Mobile Services Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle on button click
                                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-orange-500"
                                    >
                                        <span>Services</span>
                                        <ChevronDown className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isServicesOpen && ( // Conditional rendering based on state
                                        <div className="bg-gray-50 px-4">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.id}
                                                    to="/service"
                                                    state={{ serviceId: service.id }}
                                                    className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                                                >
                                                    {service.name}
                                                </Link>
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
