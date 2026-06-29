import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import plant1 from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png';

const O2Plants = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-flora-bg pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Best o2" />

        {/* Featured O2 Card */}
        <div className="glass-card max-w-5xl mx-auto mt-12 overflow-hidden border border-flora-border/50 bg-[#1A2E23]/60 backdrop-blur-md rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-flora-accent/5 group">
          <div className="flex flex-col lg:flex-row items-center p-6 sm:p-8 md:p-12 gap-8 md:gap-12">
            {/* Left: Plant Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={plant1}
                alt="Variegated Aglaonema plant in white speckled pot"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right: Copy & Actions */}
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-flora-text leading-tight tracking-tight">
                We Have Small And Best O2 Plants Collections
              </h3>
              
              <div className="space-y-4">
                <p className="text-flora-text-secondary text-sm md:text-base leading-relaxed">
                  O2 plants are those plants which release oxygen in the night also. this helps in the process of photosynthesis...
                </p>
                <p className="text-flora-text-secondary text-sm md:text-base leading-relaxed">
                  Many plants can be used to filter out pollutants and hazardous chemicals, such as formaldehyde, benzene, and trichloroethylene. This makes for a cleaner and healthier home for...
                </p>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-4 border-t border-flora-border/30">
                <button className="bg-flora-accent hover:bg-flora-accent-light text-[#0A1F12] font-semibold px-8 py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-flora-accent/20 cursor-pointer uppercase tracking-wider">
                  Order
                </button>
                
                {/* Pagination Indicator */}
                <div className="flex items-center gap-4">
                  <button className="w-9 h-9 rounded-lg border border-flora-text/20 hover:border-flora-accent flex items-center justify-center text-flora-text-secondary hover:text-flora-accent transition-all duration-300 cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold tracking-wider text-flora-text">
                    01/03
                  </span>
                  <button className="w-9 h-9 rounded-lg border border-flora-text/20 hover:border-flora-accent flex items-center justify-center text-flora-text-secondary hover:text-flora-accent transition-all duration-300 cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;

