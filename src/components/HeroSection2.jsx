// src/components/HeroSection2.js

import React from "react";

const HeroSection2 = () => {
  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A0B3B] mb-8">
              We Provide Best Funeral And Cremation<br />
              Service Since 1998
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The loss of a loved one is a difficult time and choosing the right way to honor and say goodbye to them is a crucial part of a grieving journey. Funeral and cremation service providers like us offer different ways to honor a person's life and bid them farewell.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Funeral services provide an opportunity for family and friends to come together, share memories, and pay their respects to the departed. It can be held in a range of meaningful locations, such as a funeral home, church, or even a cherished family spot. This allows everyone to gather in a setting that feels fitting for the person being remembered.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Cremation services, on the other hand, offer a unique way to honor your loved one's memory. After the funeral, the body is reduced to ash, which can be kept in a cherished urn or scattered in a place that holds significance to your loved one. This allows the family to keep a physical remnant of their loved one close by or provide a final resting place for them.
              </p>

              <p className="text-gray-700 leading-relaxed mb-12">
                Whether you choose one or both services, the most important factor is to follow the wishes of your loved one and their family, while also considering any religious or cultural traditions. Funeral directors and cremation providers can provide compassionate guidance and support, helping to ease the burden during this difficult time.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-full">
              <img
                src="https://lealfuneralhome.com/wp-content/uploads/2023/09/about-us-scaled.webp"
                alt="Funeral service memorial with candles and flowers"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Experience Counter */}
          <div className="mt-16 flex justify-start">
            <div className="flex items-center gap-6">
              <span className="text-[120px] font-bold text-[#F7941D] leading-none">35</span>
              <div className="border-l-2 border-gray-300 pl-6">
                <p className="text-gray-600 text-xl">Year</p>
                <p className="text-[#0A0B3B] font-semibold text-xl">Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection2;
