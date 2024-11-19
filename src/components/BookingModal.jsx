import React, { useState } from 'react';
import { X, User, Phone } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData);
        setFormData({ name: '', mobile: '' });
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-gray-100 p-8 rounded-lg relative max-w-md w-full mx-4">
                {/* Modal Header */}
                <header className="flex justify-between items-center mb-6">
                    <h2 id="modal-title" className="text-2xl font-bold text-navy-900">
                        Book Now
                    </h2>
                    <button
                        onClick={onClose}
                        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                        aria-label="Close Booking Modal"
                    >
                        <X size={20} />
                    </button>
                </header>

                {/* Modal Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    aria-labelledby="modal-description"
                >
                    <p id="modal-description" className="sr-only">
                        Enter your name and mobile number to book a service.
                    </p>

                    {/* Name Input */}
                    <div className="relative">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <User className="text-gray-400" size={20} />
                        </div>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Your Name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>

                    {/* Mobile Input */}
                    <div className="relative">
                        <label htmlFor="mobile" className="sr-only">
                            Mobile Number
                        </label>
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Phone className="text-gray-400" size={20} />
                        </div>
                        <input
                            id="mobile"
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter Your Mobile Number"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                        aria-label="Submit Booking"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
