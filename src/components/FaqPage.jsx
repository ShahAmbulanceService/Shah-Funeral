import React from 'react';
import Common from './Common';

const FAQ = () => {
    const faqs = [
        {
            question: "What services do you offer?",
            answer:
                "We provide a wide range of funeral services, including funeral arrangements, cremation, pandit services, asthi visarjan, Chautha & Tehravin ceremonies, prayer hall services, dead body transport, freezer box facilities, and antim sanskar samagri.",
        },
        {
            question: "How do I arrange a funeral service?",
            answer:
                "You can call us at +91 96194 00500 / +91 96195 00600, and our team will assist you in planning and organizing a respectful funeral service.",
        },
        {
            question: "What is included in your cremation service?",
            answer:
                "Our cremation service includes all necessary arrangements such as transportation, required documents, and a dignified farewell for your loved one.",
        },
        {
            question: "Do you provide pandits for performing last rites?",
            answer:
                "Yes, we have experienced pandits who can guide you through traditional last rites and rituals with utmost reverence.",
        },
        {
            question: "What is Asthi Visarjan, and do you assist with it?",
            answer:
                "Asthi Visarjan is the ritual of immersing a loved one's ashes in a sacred river. We facilitate the process and ensure it is done according to religious customs.",
        },
        {
            question: "Do you offer Chautha & Tehravin services?",
            answer:
                "Yes, we arrange Chautha & Tehravin ceremonies to help families gather, remember, and offer prayers for their departed loved ones.",
        },
        {
            question: "Can I book a prayer hall for a memorial service?",
            answer:
                "Absolutely! We provide serene prayer halls for families and friends to come together and offer prayers in memory of their loved ones.",
        },
        {
            question: "Do you offer dead body transportation services?",
            answer:
                "Yes, we have professional dead body transport services to safely move the deceased locally, nationally, or even internationally, following all legal requirements.",
        },
        {
            question: "How does your freezer box service work?",
            answer:
                "We provide freezer box services to preserve the body until funeral arrangements are made, ensuring proper care and dignity.",
        },
        {
            question: "What materials do you provide for last rites?",
            answer:
                "We offer a complete set of antim sanskar samagri (funeral materials), including essential items for a traditional Hindu last rites ceremony.",
        },
        {
            question: "Do you provide funeral arrangements for different religions?",
            answer:
                "Yes, we cater to funeral and cremation services for different religious customs, ensuring that all rituals are performed as per traditions.",
        },
        {
            question: "How soon can a funeral service be arranged?",
            answer:
                "We can arrange a funeral within a few hours, depending on legal formalities and transportation needs. Contact us for immediate assistance.",
        },
        {
            question: "Do you assist with death certificate formalities?",
            answer:
                "Yes, we help with all legal documentation, including obtaining a death certificate and necessary permits for cremation or burial.",
        },
        {
            question: "Can you provide home-based funeral services?",
            answer:
                "Yes, we can arrange funeral services at home, including prayers, rituals, and setup for family and guests.",
        },
        {
            question: "How do I contact you for emergency services?",
            answer:
                "You can call us 24/7 at +91 96194 00500 / +91 96195 00600 for any urgent funeral or cremation service assistance.",
        },
    ];


    return (
        <div className="min-h-screen bg-white">
            <Common title="FAQ" route="faq" />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16" aria-labelledby="faq-heading">
                <div className="max-w-6xl mx-auto">
                    {/* Title and Description */}
                    <header className="text-center mb-12">
                        <h1 id="faq-heading" className="text-4xl font-bold text-[#0A0B3B] mb-8">
                            Frequently Asked Questions
                        </h1>
                    </header>

                    {/* FAQ List */}
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b pb-6">
                                <h2 className="text-xl font-semibold text-[#F7941D]">{faq.question}</h2>
                                <p className="text-gray-700 mt-2">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FAQ;
