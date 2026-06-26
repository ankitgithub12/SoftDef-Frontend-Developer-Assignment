import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import plantImg from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png';

const BestO2 = () => {
  return (
    <section className="py-20 bg-[#0f1f10] relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle title="Our Best o2" />

        {/* Full-width glass card */}
        <div className="bg-[#1a2e1a]/30 backdrop-blur-xl rounded-[50px] md:rounded-[70px] overflow-hidden border border-[#233b23]/50 hover:border-[#4ade80]/30 transition-all duration-500 shadow-2xl group">
          <div className="flex flex-col lg:flex-row items-center p-8 sm:p-10 md:p-12 gap-8 lg:gap-12">
            
            {/* Left: Plant Image */}
            <div className="w-full lg:w-1/2 flex justify-center bg-[#0f1f10]/30 rounded-[35px] p-6 overflow-hidden">
              <img
                src={plantImg}
                alt="Variegated Aglaonema plant in white pot"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Right: Info Area */}
            <div className="w-full lg:w-1/2 space-y-6 text-left font-sans">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                We Have Small And Best O2 Plants Collection's
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  Oxygen-producing plants, often referred to as O2 plants, release oxygen even at night. This is highly beneficial and distinguishes them from plants that only release oxygen during the day through normal photosynthesis.
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  Many of these plants can also be used to filter out common household pollutants and hazardous chemicals (like formaldehyde, benzene, and trichloroethylene), resulting in a cleaner, fresher, and healthier living environment.
                </p>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-6 border-t border-[#233b23]/50">
                <button className="border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all duration-300 cursor-pointer uppercase tracking-wider">
                  Explore
                </button>
                
                {/* Navigation Arrows */}
                <div className="flex items-center gap-3">
                  <button 
                    className="w-12 h-12 rounded-2xl border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
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
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-[#233b23] hover:bg-[#4ade80]/50 transition-colors cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-[#233b23] hover:bg-[#4ade80]/50 transition-colors cursor-pointer"></span>
        </div>

      </div>
    </section>
  );
};

export default BestO2;
