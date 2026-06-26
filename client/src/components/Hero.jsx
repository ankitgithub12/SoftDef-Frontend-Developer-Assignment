import React from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';
import plantImg from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png';
import backgroundPlant from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg';
import avatar1 from '../assets/avatar-1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0f1f10]"
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ade80]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Giant Round Topiary Plant in Background/Center */}
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <img
          src={backgroundPlant}
          alt="Large round topiary plant background decoration"
          className="w-[300px] sm:w-[480px] md:w-[650px] lg:w-[800px] h-auto object-contain opacity-25 mix-blend-lighten select-none pointer-events-none translate-y-16"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-left animate-fade-in-up">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-white leading-none tracking-tight">
                Earth's Exhale
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans font-normal">
                Earth Exhale symbolizes the purity and vitality of the Earth's natural environment. 
                From lush indoor greens to vibrant outdoor blooms, our plants are crafted to refresh and elevate your living environment.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 font-sans">
              <a
                href="#shop"
                className="bg-white hover:bg-gray-100 text-black px-8 py-3.5 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-white/10 text-center cursor-pointer"
              >
                Buy Now
              </a>
              <button className="flex items-center gap-3 text-white hover:text-[#4ade80] transition-colors duration-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/30 group-hover:border-[#4ade80] flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#4ade80] transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-sm sm:text-base font-bold tracking-wider">
                  Live Demo...
                </span>
              </button>
            </div>

            {/* Testimonial Box */}
            <div className="bg-[#1a2e1a]/35 backdrop-blur-md p-6 border border-[#233b23]/50 rounded-[28px] max-w-sm shadow-2xl transition-all hover:border-[#4ade80]/30">
              <div className="flex items-center gap-3 mb-2.5">
                <img
                  src={avatar1}
                  alt="Ronnie Hamill"
                  className="w-10 h-10 rounded-full border border-[#4ade80] object-cover"
                />
                <div>
                  <h4 className="text-white font-sans font-bold text-sm tracking-wide">
                    Ronnie Hamill
                  </h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#e9f908] fill-[#e9f908]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* Right Plant Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="bg-[#1a2e1a]/35 backdrop-blur-xl w-72 sm:w-80 p-6 border border-[#233b23]/50 rounded-[45px] shadow-2xl relative group hover:border-[#4ade80]/40 transition-all duration-500">
              {/* Plant Image Container */}
              <div className="flex justify-center mb-5 bg-[#0f1f10]/30 rounded-[30px] p-4 overflow-hidden">
                <img
                  src={plantImg}
                  alt="Aglaonema plant"
                  className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Plant Details */}
              <div className="space-y-4 font-sans text-left">
                <div>
                  <span className="text-gray-400 text-xs font-semibold tracking-wider">
                    Indoor Plant
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Aglaonema plant
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <a
                  href="#shop"
                  className="w-full bg-[#1a2e1a]/40 hover:bg-white border border-white/35 text-white hover:text-black py-3 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer"
                >
                  Buy Now
                </a>

                {/* Card Pagination Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 cursor-pointer"></span>
                  <span className="w-4 h-1.5 rounded-full bg-white cursor-pointer"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 cursor-pointer"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
