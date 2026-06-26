import React from 'react';
import { Bookmark } from 'lucide-react';
import SectionTitle from './SectionTitle';
import plant1 from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png';
import plant2 from '../assets/444fba49a2674d2262c5455bcc501cb91b314490.png';

const TrendyPlants = () => {
  return (
    <section id="trending" className="py-20 bg-[#0f1f10] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#4ade80]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle title="Our Trendy Plants" />

        {/* Cards Container */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
          
          {/* Card 1 (Left): Plant on left, Details on right */}
          <div className="bg-[#1a2e1a] rounded-3xl p-6 sm:p-8 border border-[#233b23] hover:border-[#4ade80]/30 transition-all duration-350 group shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 h-full">
              
              {/* Plant Image */}
              <div className="w-full sm:w-1/2 flex justify-center bg-[#0f1f10]/30 rounded-2xl p-4 overflow-hidden">
                <img
                  src={plant1}
                  alt="Beige pot plant - For Your Desks Decorations"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant Details */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between h-full space-y-4 text-left font-sans">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    For Your Desks Decorations
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    This miniature plant's leaves will add color, charm, and a fresh feel wherever you decide to place it.
                  </p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">Price</span>
                    <p className="text-white font-extrabold text-xl sm:text-2xl mt-0.5">Rs. 599/-</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="border border-white hover:border-[#4ade80] hover:bg-[#4ade80] hover:text-black text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button 
                      className="w-10 h-10 rounded-xl border border-[#233b23] hover:border-[#4ade80] flex items-center justify-center text-gray-300 hover:text-[#4ade80] hover:bg-[#1a2e1a] transition-all duration-300 cursor-pointer"
                      aria-label="Bookmark plant"
                    >
                      <Bookmark className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2 (Right): Details on left, Plant on right */}
          <div className="bg-[#1a2e1a] rounded-3xl p-6 sm:p-8 border border-[#233b23] hover:border-[#4ade80]/30 transition-all duration-350 group shadow-lg">
            <div className="flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-8 h-full">
              
              {/* Plant Image */}
              <div className="w-full sm:w-1/2 flex justify-center bg-[#0f1f10]/30 rounded-2xl p-4 overflow-hidden">
                <img
                  src={plant2}
                  alt="Succulent in blue pot - For Your Desks Decorations"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant Details */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between h-full space-y-4 text-left font-sans">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    For Your Desks Decorations
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    This miniature succulent's leaves will add color, charm, and a fresh feel wherever you decide to place it.
                  </p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">Price</span>
                    <p className="text-white font-extrabold text-xl sm:text-2xl mt-0.5">Rs. 399/-</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="border border-white hover:border-[#4ade80] hover:bg-[#4ade80] hover:text-black text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button 
                      className="w-10 h-10 rounded-xl border border-[#233b23] hover:border-[#4ade80] flex items-center justify-center text-gray-300 hover:text-[#4ade80] hover:bg-[#1a2e1a] transition-all duration-300 cursor-pointer"
                      aria-label="Bookmark plant"
                    >
                      <Bookmark className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendyPlants;
