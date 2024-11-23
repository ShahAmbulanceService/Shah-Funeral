import React from 'react';
import { Facebook, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import scrollToTop from '../hooks/useScrollEffect';
import Logo from '../images/logo.png';

const Footer = () => {
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

    const links = [
        { title: 'Home', route: '/' },
        { title: 'About', route: '/about' },
        { title: 'Contact', route: '/contact' },
        { title: 'Privacy Policy', route: '/' },
        { title: 'Terms & Conditions', route: '/' },
    ];

    return (
        <footer className=" bg-navy text-white py-12 px-4 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <div className="w-32 h-32 transform rotate-45">
                    <div className="w-full h-full border-2 border-white rounded-tl-full"></div>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <img src={Logo} alt="Tribute Funeral Services" className="h-20 w-auto" />
                    <p className="text-gray-700">
                        Trust us for peaceful care for your loved ones, beyond this world and into eternity.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566525907429&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors"
                            aria-label="Visit our Facebook page"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://www.youtube.com/@ShahAmbulanceService"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors"
                            aria-label="Visit our YouTube channel"
                        >
                            <Youtube size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/shahambulanceservice24x7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors"
                            aria-label="Visit our Instagram profile"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service.id}>
                                <Link
                                    to="/service"
                                    state={{ serviceId: service.id }}
                                    className="text-black hover:text-orange-400 transition-colors"
                                    onClick={scrollToTop}
                                >
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.route}
                                    className="text-gray-900 hover:text-orange-400 transition-colors"
                                    onClick={scrollToTop}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">Contact Info</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <MapPin className="text-orange-400 mt-1" size={20} />
                            <p className="text-gray-900">
                                Near Jaslok Hospital, 15 Pedder Rd, IT Colony,
                                <br />
                                Tardeo, Mumbai, Maharashtra 400026
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-orange-400" size={20} />
                            <p className="text-gray-900">+91 96194 00500</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-orange-400" size={20} />
                            <p className="text-gray-900">+91 96195 00600</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-orange-400" size={20} />
                            <p className="text-gray-900">shahambulanceservice24x7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-900">
                <p>
                    Copyright © {new Date().getFullYear()} All rights reserved | Designed by{' '}
                    <a
                        href="https://zome.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:underline"
                    >
                        Zome
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
