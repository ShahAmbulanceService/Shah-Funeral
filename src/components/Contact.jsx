import { useState } from 'react';
import { Mail, Home } from 'lucide-react'; // Adjusting to available imports

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="relative h-48 bg-gray-900">
                <div className="absolute inset-0">
                    <div className="h-full w-full bg-[url('/api/placeholder/1920/300')] bg-cover bg-center opacity-20" />
                </div>
                <div className="relative flex h-full items-center justify-between px-8">
                    <h1 className="text-4xl font-bold text-white">Contact Us</h1>
                    <nav className="text-white">
                        <a href="/" className="hover:text-orange-500">Home</a>
                        <span className="mx-2">/</span>
                        <a href="/about" className="hover:text-orange-500">About Us</a>
                    </nav>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Form */}
                    <div>
                        <h2 className="mb-8 text-2xl font-bold text-blue-900">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full rounded border  border-gray-300 bg-white p-3"
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Mobile Number"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                rows={4}
                                className="w-full rounded border border-gray-300 bg-white p-3"
                                onChange={handleChange}
                                value={formData.message}
                            />
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    name="captcha"
                                    placeholder="Captcha"
                                    className="w-full rounded border border-gray-300 bg-white p-3"
                                    onChange={handleChange}
                                    value={formData.captcha}
                                />
                                <div className="flex h-12 w-24 items-center justify-center rounded bg-gray-200">
                                    <span className="text-gray-600">964591</span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="rounded bg-orange-500 px-8 py-3 font-semibold text-blue-900 hover:bg-orange-600"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="mb-8 text-2xl font-bold text-blue-900">
                            Contact Us To Get Better Information
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-orange-500 p-3">
                                    <Mail className="h-6 w-6 text-blue-900" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">Lets Talk</h3>
                                    <p className="text-black">+91 96191 18000</p>
                                    <p className="text-black">tribhuvanfuneralservice@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-orange-500 p-3">
                                    <Home className="h-6 w-6 text-blue-900" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">Address</h3>
                                    <p className="text-black">
                                        287 Station Vivekanand Road, LIC
                                        <br />
                                        Colony Screen Colony Vile Parle West,
                                        <br />
                                        Mumbai, Maharashtra 400057
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
