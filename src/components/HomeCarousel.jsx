import React, { useState, useEffect } from "react";
import Image1 from "../images/home-carousel-1.jpg";
import Image2 from "../images/home-carousel-2.jpg";
import Image3 from "../images/home-carousel-3.jpg";

const HeroCarousel = () => {
  const slides = [
    {
      image: Image1,
      title: (
        <>
          Guiding You Through Moments <br />
          Of <span className="text-orange-500">Remembrance</span> With <br />
          Care And Compassion Across <br />
          <span className="text-orange-500">Mumbai, Navi Mumbai & Thane</span>
        </>
      ),
      buttonText: "Enquire Now",
    },
    {
      image: Image2,
      title: (
        <>
          Every Life Deserves A <br />
          <span className="text-orange-500">Dignified Farewell</span>, <br />
          We're Here To Ensure It In <br />
          <span className="text-orange-500">Mumbai, Navi Mumbai & Thane</span>
        </>
      ),
      buttonText: "Enquire Now",
    },
    {
      image: Image3,
      title: (
        <>
          Where <span className="text-orange-500">Empathy</span> And <br />
          <span className="text-orange-500">Professionalism</span> Unite, <br />
          Creating Meaningful Tributes <br />
          Across <span className="text-orange-500">Mumbai, Navi Mumbai & Thane</span>
        </>
      ),
      buttonText: "Enquire Now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="relative w-full h-[75vh] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-start justify-center w-full h-full bg-black bg-opacity-50 px-8">
            <h1 className="text-3xl md:text-5xl font-medium text-white">
              {slide.title}
            </h1>
            <a
              href="tel:+919619400500"
              className="px-8 py-4 mt-8 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 z-50"
              aria-label={`Enquire Now - ${index + 1}`}
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrevious}
          className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute flex justify-center w-full bottom-5 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
