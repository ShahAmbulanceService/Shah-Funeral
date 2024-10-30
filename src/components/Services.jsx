// src/components/HomeSection3.jsx

import React from "react";

const services = [
    {
        id: 1,
        title: "Funeral Arrangement",
        image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/4961220/248301_24242.jpeg", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 2,
        title: "Cremation Service",
        image: "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_684_575_cremation-services.jpg", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 3,
        title: "Pandit for Funeral",
        image: "https://kaashimukthi.com/wp-content/uploads/2023/03/Pandit-for-Funeral-2.png", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 4,
        title: "Asthi Visarjan",
        image: "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_684_575_Untitled-design-3.png", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 5,
        title: "Chautha And Tehravin",
        image: "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_684_575_The-Rituals-of-Chautha-and-Tehravin.jpg", // Replace with your actual image path
        description:
            "Losing a loved one is a difficult and emotional experience, and we understand the significance of observing the traditions of Tehravin and Chautha, important mourning rituals in many cultures.",
    },
    {
        id: 6,
        title: "Prayer Hall Service",
        image: "https://www.lastjourney.in/uploaded_files/thumb_cache/thumb_684_575_how-to-create-peaceful-welcoming-prayer-meeting-hall.png", // Replace with your actual image path
        description:
            "We understand that having a peaceful and appropriate space for prayer and remembrance is essential during times of grief and mourning. As a provider of prayer hall services, we offer a serene and accommodating environment.",
    },
    {
        id: 7,
        title: "Dead Body Transport",
        image: "https://www.lastjourney.in/uploaded_files/category/raju-srivastava.jpeg", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 8,
        title: "Freezer Box",
        image: "https://annaiambulance.in/wp-content/uploads/elementor/thumbs/20240126_204642-scaled-qkh2tz3mfzjyvyoxboq79a6h5t12p4oyq886j1ae8w.jpg", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
    {
        id: 9,
        title: "Antim Sanskar Samagri",
        image: "https://kaashimukthi.com/wp-content/uploads/2023/03/Antim-Sanskar-Samagri-3-1024x439.png", // Replace with your actual image path
        description:
            "Losing a loved one is a deeply emotional experience, and we understand the significance of performing the final ritual of asthi visarjan (immersion of cremation ashes) with utmost reverence and respect.",
    },
];


const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-left text-[#04083e]">
                OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
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
                                <a href="#" className="text-orange-500 relative z-10">
                                    Read More
                                </a>
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