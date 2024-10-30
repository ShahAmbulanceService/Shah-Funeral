import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const services = [
        'Funeral Service',
        'Dead Body Transport Service',
        'Dead Body Freezer Box',
        'Chautha And Tehravin',
        'Cremation Service',
        'Pandit for Funeral Services',
        'Prayer Hall',
        'Asthi Visarjan',
        'Antim Sanskar Samagri'
    ];

    const links = [
        {
           title: 'Home',
           route: '/'
        },
        {
           title: 'About',
           route: '/about'
        },
        {
            title: 'Contact',
            route:'/contact'
        },
        {
            title: 'Privacy Policy',
            route:'/'
        },
        {
            title: 'Terms & Conditions',
            route:'/'
        }

       
    ];

    return (
        <footer className="bg-navy text-white py-12 px-4 relative overflow-hidden">
            {/* Background bird logo */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <div className="w-32 h-32 transform rotate-45">
                    {/* Simplified bird shape using a div with border */}
                    <div className="w-full h-full border-2 border-white rounded-tl-full"></div>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        {/* Logo */}
                        <img src="https://shahfuneralservice.in/images/logo-antim-sanskar-seva.png" alt="Tribute Funeral Services" className="h-20 w-auto" />
                    </div>
                    <p className="text-gray-700">
                        Trust us for peaceful care for your loved ones, beyond this world and into eternity.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="bg-orange-400 p-2 rounded-md hover:bg-orange-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        {services.map((service, index) => (
                            <li key={index}>
                                <a href="#" className="text-black hover:text-orange-400 transition-colors">
                                    {service}
                                </a>
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
                                <Link to={link.route} className="text-gray-900 hover:text-orange-400 transition-colors">
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
                                387 Swami Vivekanand Road, LIC Colony Suresh Colony Vile Parle West, Mumbai, Maharashtra 400047
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-orange-400" size={20} />
                            <p className="text-gray-900">+91 96191 18000</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-orange-400" size={20} />
                            <p className="text-gray-900">+91 96191 19000</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-orange-400" size={20} />
                            <p className="text-gray-900">tributefuneralservice@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-900">
                <p>
                    Copyright © 2024 All rights reserved | Designed by{' '}
                    <a href="https://zome-tech.vercel.app/" className="text-orange-400 hover:underline">
                        Zome 
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
