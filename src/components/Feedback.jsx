import React, { useState } from "react";

const FeedbackSection = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 3,
      message:
        "Shah Funeral Services handled everything with such dignity and respect. Their compassionate approach made us feel supported during our loss.",
      name: "Anjali Patel",
    },
    {
      id: 4,
      message:
        "I cannot thank the team at Shah Funeral Services enough for their professionalism and empathy. They truly eased the burden on our family.",
      name: "Kiran Sharma",
    },
    {
      id: 5,
      message:
        "Their attention to detail and commitment to honoring our traditions were remarkable. We felt at peace knowing everything was in their capable hands.",
      name: "Sunil Kumar",
    },
    {
      id: 6,
      message:
        "Shah Funeral Services offered more than just service; they provided emotional support and guidance. We’ll always remember their kindness.",
      name: "Priya Desai",
    },
    {
      id: 7,
      message:
        "The staff was incredibly patient and understanding. They walked us through every step and made a challenging time much easier.",
      name: "Vivek Joshi",
    },
    {
      id: 8,
      message:
        "I highly recommend Shah Funeral Services. They delivered exceptional care and professionalism while respecting our cultural values.",
      name: "Arun Mehta",
    },
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
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-labelledby="feedback-heading"
    >
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Side - Heading and Navigation */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2
            id="feedback-heading"
            className="text-4xl sm:text-5xl font-bold text-[#04083e] mb-4"
          >
            Some Feedback From Client
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are proud to share the positive feedback we have received from
            many of the families and individuals who we supported during their
            difficult times.{" "}
            <a
              className="text-blue-700 underline"
              href="https://www.google.com/search?q=shah+funeral+ser+ice&oq=shah+funeral+ser+ice&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyCggEEAAYgAQYogQyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgyNDQ4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=ChRzaGFoIGZ1bmVyYWwgc2VydmljZUiJ1pH4rbqAgAhaIhAAEAEQAhgAGAEYAiIUc2hhaCBmdW5lcmFsIHNlcnZpY2WSARFhbWJ1bGFuY2Vfc2VydmljZaoBVxABKhgiFHNoYWggZnVuZXJhbCBzZXJ2aWNlKAAyHxABIhtDGt5-ILvxb-osuqZwjRO9-FK7Y8NB_TByqkQyGBACIhRzaGFoIGZ1bmVyYWwgc2VydmljZQ#lrd=0xa91473f1d36b6e23:0x654650597d9f379a,3,,,,&rlimm=7297608591490365338"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share Your Experience
            </a>
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Feedback"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Feedback"
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Side - Feedback Cards */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
          {/* Feedback Card 1 */}
          <article
            className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
            aria-label={`Feedback from ${feedbacks[currentIndex].name}`}
          >
            <p className="text-gray-700 text-lg mb-4">
              {feedbacks[currentIndex].message}
            </p>
            <p className="font-bold text-[#04083e]">{feedbacks[currentIndex].name}</p>
          </article>
          {/* Feedback Card 2 */}
          <article
            className="bg-white rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
            aria-label={`Feedback from ${feedbacks[(currentIndex + 1) % feedbacks.length].name}`}
          >
            <p className="text-gray-700 text-lg mb-4">
              {feedbacks[(currentIndex + 1) % feedbacks.length].message}
            </p>
            <p className="font-bold text-[#04083e]">{feedbacks[(currentIndex + 1) % feedbacks.length].name}</p>
          </article>
        </div>
      </header>
    </section>
  );
};

export default FeedbackSection;
