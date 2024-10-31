import React from 'react';

const ServicePage = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                    {/* Hero Image */}
                    <div className="w-full h-64 md:h-96 mb-6 relative">
                        <img
                            src="/api/placeholder/800/600"
                            alt="Funeral Arrangement with Red and White Flowers"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Introduction Text */}
                    <p className="text-gray-700 mb-6">
                        Losing a loved one is a deeply emotional and difficult experience, and we understand the importance of providing
                        a compassionate and supportive funeral arrangement service during this time of grief. As a dedicated funeral
                        service provider, we are here to guide and assist you every step of the way. Here is an overview of the
                        comprehensive services we offer:
                    </p>

                    {/* Services List */}
                    <div className="space-y-6">
                        <ServiceItem
                            title="Personalized Consultation"
                            description="We offer a compassionate and understanding environment where we listen to your needs, preferences, and wishes. Our experienced funeral directors will provide guidance and support as we work together to create a personalized funeral service that truly reflects the life and values of your loved one."
                        />

                        <ServiceItem
                            title="Funeral Planning"
                            description="Our knowledgeable team will help you with all aspects of funeral planning. From choosing the type of service (burial or cremation) to deciding on the ceremony format, music selection, and readings, we are here to ensure that every detail is tailored to honor and celebrate the life of your loved one."
                        />

                        <ServiceItem
                            title="Venue Selection"
                            description="We can assist you in finding an appropriate venue for the funeral service, whether it's a place of worship, a funeral home chapel, or any other location that holds significance to your family. We will consider factors such as capacity, accessibility, and any specific cultural or religious requirements."
                        />

                        <ServiceItem
                            title="Casket and Urn Options"
                            description="We provide a wide selection of caskets and urns to suit different preferences and budgets. Our caring staff will help you choose a casket or urn that reflects the individuality of your loved one, offering a range of styles, materials, and finishes for you to consider."
                        />

                        <ServiceItem
                            title="Transportation and Logistics"
                            description="We take care of all transportation logistics, ensuring the smooth and dignified transfer of your loved one's remains. Whether it's arranging for a hearse, coordinating with the cemetery or crematorium, or assisting with out-of-town transportation, we handle these details with utmost care and professionalism."
                        />
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
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Enter Mobile Number"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Captcha"
                                    className="flex-grow p-2 border border-gray-300 rounded"
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
                            <ServiceLink text="Funeral Arrangement Services" />
                            <ServiceLink text="Pandit For Funeral" />
                            <ServiceLink text="Cremation Service" />
                            <ServiceLink text="Chautha and Tehravin" />
                            <ServiceLink text="Prayer Hall Service" />
                            <ServiceLink text="Dead Body Transport Service" />
                            <ServiceLink text="Dead Body Freeze Box" />
                            <ServiceLink text="Antim Sanskar Samagri" />
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

const ServiceLink = ({ text }) => (
    <li>
        <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
            {text}
        </a>
    </li>
);

export default ServicePage;