import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

import plant1 from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'; // Aglaonema
import plant2 from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png'; // Sansevieria plant
import plant3 from '../assets/5196aba58f7006d90ec0712ac1d01688cde1a537.png'; // Swiss cheese Plant
import plant4 from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'; // Plantain Lilies

const o2Plants = [
  {
    image: plant1,
    alt: "Variegated Aglaonema plant in white pot",
    title: "We Have Small And Best O2 Plants Collections",
    descriptions: [
      "Oxygen-producing plants, often referred to as O2 plants, release oxygen even at night. This is highly beneficial and distinguishes them from plants that only release oxygen during the day through normal photosynthesis.",
      "Many of these plants can also be used to filter out common household pollutants and hazardous chemicals (like formaldehyde, benzene, and trichloroethylene), resulting in a cleaner, fresher, and healthier living environment."
    ]
  },
  {
    image: plant2,
    alt: "Sansevieria plant in ceramic pot",
    title: "Cleanse Your Home Air With Snake Plants",
    descriptions: [
      "Sansevieria is well-known for its exceptional ability to produce oxygen and absorb carbon dioxide even in the dark. It is one of the top choices recommended by NASA for indoor air purification.",
      "Its low-maintenance nature makes it perfect for bedrooms and offices, requiring minimal watering and thriving in both bright and low-light conditions."
    ]
  },
  {
    image: plant3,
    alt: "Swiss cheese Plant in white pot",
    title: "Fresh Oxygen Boost From Monstera Deliciosa",
    descriptions: [
      "Monstera Deliciosa, or Swiss cheese Plant, has broad leaves that are highly efficient at conducting photosynthesis and generating significant amounts of oxygen during daylight hours.",
      "Aside from its decorative split leaves, it acts as an effective natural humidifier, improving air moisture levels and trapping dust in its large surface area."
    ]
  },
  {
    image: plant4,
    alt: "Plantain Lilies in decorative pot",
    title: "Enrich Your Space With Lush Plantain Lilies",
    descriptions: [
      "Plantain Lilies, or Hostas, are excellent for shade gardens and indoor spots, known for their large decorative leaves that maximize light absorption and oxygen production.",
      "They help regulate indoor moisture levels, creating a revitalized atmosphere that promotes relaxation and enhances focus throughout the day."
    ]
  }
];

const BestO2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? o2Plants.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === o2Plants.length - 1 ? 0 : prev + 1));
  };

  const activePlant = o2Plants[currentIndex];

  return (
    <section className="py-20 bg-[#0f1f10] relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Heading */}
        <SectionTitle title="Our Best o2" />

        {/* Full-width glass card */}
        <div className="mt-16 sm:mt-20 bg-white/[0.03] backdrop-blur-xl rounded-[40px] overflow-visible border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 shadow-2xl group">
          <div className="flex flex-col lg:flex-row items-center p-8 sm:p-10 md:p-12 gap-8 lg:gap-12">

            {/* Left: Plant Image */}
            <div className="w-full lg:w-1/2 flex justify-center relative z-10 lg:-mt-24 lg:-mb-16">
              <img
                key={`img-${currentIndex}`}
                src={activePlant.image}
                alt={activePlant.alt}
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] animate-fade-in-up"
              />
            </div>

            {/* Right: Info Area */}
            <div 
              key={`info-${currentIndex}`}
              className="w-full lg:w-1/2 space-y-6 text-left font-sans animate-fade-in-up"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {activePlant.title}
              </h3>

              <div className="space-y-4">
                {activePlant.descriptions.map((desc, idx) => (
                  <p key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                    {desc}
                  </p>
                ))}
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-6 border-t border-[#233b23]/50">
                <button className="border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all duration-300 cursor-pointer uppercase tracking-wider">
                  Explore
                </button>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-2xl border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-2xl border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {o2Plants.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-[#4ade80]' : 'w-2.5 bg-[#233b23] hover:bg-[#4ade80]/50'
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestO2;
