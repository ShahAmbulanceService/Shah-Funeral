import React, { useState, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Dropdown = ({ title, items, isOpen, toggle }) => {
    return (
        <div className="relative group">
            <button
                onClick={toggle}
                onMouseEnter={() => toggle(true)} // Keep dropdown open on hover
                onMouseLeave={() => toggle(false)} // Close dropdown on leave
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500"
                value="nONE"
            >
                <span>{title}</span>
                <ChevronDown className="w-4 h-4" />
            </button>
            <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
                    ${isOpen ? 'block' : 'hidden'}`}
                style={{ zIndex: 50 }}
            >
                <div className="py-1">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            to="/service"
                            state={{ serviceId: item.id }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

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

    const handleBookingSubmit = useCallback((formData) => {
        console.log('Form submitted:', formData);
    }, []);

    return (
        <>
            <nav className="bg-white shadow-md relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center space-x-4">
                            <img
                                src={Logo}
                                alt="Tribute Services Logo"
                                className="h-20 w-auto"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
                            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>

                            {/* Desktop Services Dropdown */}
                            <Dropdown
                                title="Services"
                                items={services}
                                isOpen={isServicesOpen}
                                toggle={setIsServicesOpen}
                            />
                            <Link to="/faq" className="text-gray-700 hover:text-orange-500">FAQ</Link>
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
                                <Dropdown
                                    title="Services"
                                    items={services}
                                    isOpen={isServicesOpen}
                                    toggle={setIsServicesOpen}
                                />
                                <Link to="/faq" className="block px-3 py-2 text-gray-700 hover:text-orange-500">FAQ</Link>
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
