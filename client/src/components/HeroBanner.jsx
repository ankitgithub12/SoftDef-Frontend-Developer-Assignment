import React from 'react';
import { Play, Star, ChevronRight } from 'lucide-react';
import Button from './Button';
import plant1 from '../assets/plant-1.png';
import backgroundPlant from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg';
import avatar1 from '../assets/avatar-1.png';

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background dark gradients */}
      <div className="absolute inset-0 bg-flora-bg"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-flora-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-flora-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Giant Round Plant in Center Background */}
      <div className="absolute inset-x-0 bottom-[-100px] md:bottom-[-200px] lg:bottom-[-250px] flex justify-center z-0 pointer-events-none">
        <img
          src={backgroundPlant}
          alt="Large round topiary plant in background"
          className="w-[280px] sm:w-[450px] md:w-[600px] lg:w-[750px] xl:w-[850px] h-auto object-contain opacity-40 mix-blend-lighten select-none"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          {/* Left Column (Content & Review) - Takes 7 cols on large screens */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12 animate-fade-in-up">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-flora-text leading-tight tracking-tight">
                Earth's Exhale
              </h1>
              <p className="text-flora-text-secondary text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                Green is the primary color of the world, and that from which its
                loveliness arises. keep your mind fresh using this.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Button variant="primary" className="px-8 py-3.5 rounded-full text-base font-semibold">
                Buy Now
              </Button>
              <button className="flex items-center gap-3 text-flora-text hover:text-flora-accent transition-colors duration-300 group cursor-pointer">
                <div className="w-11 h-11 rounded-full border-2 border-flora-accent flex items-center justify-center text-flora-accent group-hover:bg-flora-accent group-hover:text-flora-bg transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                  See Video
                </span>
              </button>
            </div>

            {/* Testimonial/Rating Box */}
            <div className="glass-card p-5 max-w-sm border border-flora-border/50 bg-[#1A2E23]/60 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={avatar1}
                  alt="Shally Runse's avatar"
                  className="w-10 h-10 rounded-full border-2 border-flora-accent object-cover"
                />
                <div>
                  <h4 className="text-flora-text font-bold text-sm tracking-wide">
                    SHALLY RUNSE
                  </h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-flora-text-secondary text-xs sm:text-sm leading-relaxed italic">
                "Good service for the customer. Agent very friendly and fast
                response. Recomended seller..."
              </p>
            </div>
          </div>

          {/* Right Column (Showcase Card) - Takes 5 cols on large screens */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-8 lg:pt-0 animate-fade-in-up">
            <div className="glass-card w-64 sm:w-72 p-5 border border-flora-border/60 bg-[#1A2E23]/70 backdrop-blur-lg rounded-3xl shadow-2xl relative group">
              {/* Plant Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={plant1}
                  alt="Aonera Aglaonema plant"
                  className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant details */}
              <div className="space-y-3">
                <div>
                  <p className="text-flora-text-secondary text-xs font-medium tracking-wider uppercase opacity-75">
                    Best Seller
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-flora-text tracking-tight mt-0.5">
                    Aonera Aglaonema plant.
                  </h3>
                </div>

                {/* Buy Now small btn */}
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-flora-text hover:border-flora-accent text-flora-text hover:text-flora-bg hover:bg-flora-accent text-xs font-semibold uppercase tracking-wider transition-all duration-300 w-full justify-center group-hover:border-flora-accent/50 cursor-pointer">
                  <span>Buy now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
