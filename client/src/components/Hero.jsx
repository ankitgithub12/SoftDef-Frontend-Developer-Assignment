import React from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';
import plantImg from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'; // Aglaonema plant
import avatar1 from '../assets/avatar-1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 bg-transparent"
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ade80]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-left animate-fade-in-up">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold text-white leading-none tracking-tight">
                Earth’s Exhale
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans font-normal">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 font-sans">
              <a
                href="#shop"
                className="border border-white/45 bg-transparent hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-[12px] text-sm sm:text-base font-bold tracking-wide transition-all duration-300 text-center cursor-pointer shadow-lg hover:shadow-white/5"
              >
                Buy Now
              </a>
              <button className="flex items-center gap-3 text-white hover:text-[#4ade80] transition-colors duration-300 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/40 group-hover:border-[#4ade80] flex items-center justify-center text-white group-hover:text-black group-hover:bg-[#4ade80] transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-sm sm:text-base font-bold tracking-wider">
                  Live Demo...
                </span>
              </button>
            </div>

            {/* Testimonial Box */}
            <div className="bg-white/[0.03] backdrop-blur-xl p-6 border border-white/[0.08] rounded-[40px] max-w-sm shadow-2xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
              <div className="flex items-center gap-3 mb-2.5">
                <img
                  src={avatar1}
                  alt="Ronnie Hamill"
                  className="w-10 h-10 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <h4 className="text-white font-sans font-bold text-sm tracking-wide">
                    Ronnie Hamill
                  </h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-[#e9f908] fill-[#e9f908]"
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center pt-20 lg:pt-0 animate-fade-in-up">
            <div className="relative flex flex-col pt-[130px] pb-6 px-6 font-sans w-80 min-h-[410px] h-[410px] transition-all duration-500 group cursor-default overflow-visible">
              {/* Custom Wavy SVG Background matching the PlantCard layout */}
              <svg
                className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-500"
                viewBox="0 0 350 450"
                preserveAspectRatio="none"
              >
                <defs>
                  <clipPath id="hero-wavy-clip">
                    <path d="M 0,80 C 0,55 15,40 40,40 C 90,40 120,65 160,65 C 210,65 260,20 310,20 C 335,20 350,35 350,60 L 350,410 C 350,432 328,450 310,450 L 40,450 C 22,450 0,432 0,410 Z" />
                  </clipPath>
                </defs>
                <foreignObject clipPath="url(#hero-wavy-clip)" width="350" height="450" className="w-full h-full">
                  <div className="w-full h-full backdrop-blur-xl bg-white/[0.03] transition-all duration-500 group-hover:bg-white/[0.06]" />
                </foreignObject>
                <path
                  d="M 0,80 C 0,55 15,40 40,40 C 90,40 120,65 160,65 C 210,65 260,20 310,20 C 335,20 350,35 350,60 L 350,410 C 350,432 328,450 310,450 L 40,450 C 22,450 0,432 0,410 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.5"
                  className="transition-all duration-500 group-hover:stroke-white/15"
                />
              </svg>

              {/* Floating Plant Image */}
              <img
                src={plantImg}
                alt="Aglaonema plant"
                className="absolute top-[-70px] left-1/2 -translate-x-1/2 w-[210px] h-[210px] object-contain transition-all duration-500 filter drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] group-hover:scale-106 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_22px_32px_rgba(0,0,0,0.55)] pointer-events-none user-select-none"
              />

              {/* Info Area (Grouped at the bottom) */}
              <div className="flex flex-col text-left mt-auto space-y-4">
                <div>
                  <span className="text-[13px] font-medium text-gray-400 uppercase tracking-wider">
                    Indoor Plant
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="text-[21px] font-semibold text-white tracking-tight leading-tight">
                      Aglaonema plant
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-all group-hover:translate-x-1" />
                  </div>
                </div>

                <a
                  href="#shop"
                  className="w-full border border-white/40 bg-transparent hover:bg-white hover:text-black py-3 rounded-[12px] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center cursor-pointer text-white"
                >
                  Buy Now
                </a>

                {/* Card Pagination Dots: first dash active, others inactive dots */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  <span className="w-4 h-1.5 rounded-full bg-white cursor-pointer transition-all"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 cursor-pointer transition-all"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 cursor-pointer transition-all"></span>
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
