import React, { useState } from "react";

const FeedbackSection = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      message:
        "Shah Funeral Services provided such caring and warmhearted service during such a difficult time. I will forever be grateful for their support.",
      name: "Rajendra Prasad.",
    },
    {
      id: 2,
      message:
        "The team at Shah Funeral Services went above and beyond to ensure that every detail of my loved one was taken care of. Service was perfect. Thank you for everything.",
      name: "Mehta Vishnoi.",
    },
    // Add more feedback items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation to previous feedback
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? feedbacks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Handle navigation to next feedback
  const handleNext = () => {
    const newIndex = currentIndex === feedbacks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Side - Heading and Navigation */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#04083e] mb-4">Some Feedback From Client</h2>
          <p className="text-gray-600 text-lg mb-6">
            We are proud to share the positive feedback we have received from many of the families and individuals who we supported during their difficult times.
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Side - Feedback Cards */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
          {/* Feedback Card 1 */}
          <div className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100">
            <p className="text-gray-700 text-lg mb-4">{feedbacks[currentIndex].message}</p>
            <p className="font-bold text-[#04083e]">{feedbacks[currentIndex].name}</p>
          </div>
          {/* Feedback Card 2 */}
          <div className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100">
            <p className="text-gray-700 text-lg mb-4">{feedbacks[(currentIndex + 1) % feedbacks.length].message}</p>
            <p className="font-bold text-[#04083e]">{feedbacks[(currentIndex + 1) % feedbacks.length].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
