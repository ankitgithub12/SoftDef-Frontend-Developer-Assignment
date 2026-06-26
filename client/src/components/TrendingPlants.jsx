import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SectionTitle from './SectionTitle';
import trendingPlant1 from '../assets/trending-plant-1.png';
import trendingPlant2 from '../assets/trending-plant-2.png';

const TrendingPlants = () => {
  return (
    <section id="trending" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-flora-bg pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Trendy plants" />

        <div className="flex flex-col gap-10 md:gap-14 max-w-5xl mx-auto mt-12">
          {/* Card 1 — Plant on left, text on right (Shifted Right) */}
          <div className="glass-card max-w-3xl w-full self-end rounded-3xl overflow-hidden border border-flora-border/50 bg-[#1A2E23]/60 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-flora-accent/5 group">
            <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={trendingPlant1}
                  alt="Beige pot plant - desk decoration"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-flora-text tracking-tight">
                  For Your Desks Decorations
                </h3>
                <p className="text-flora-text-secondary text-sm leading-relaxed">
                  The Aglaonema plant is a popular indoor plant known for its striking leaves
                </p>
                <div className="space-y-1">
                  <span className="text-flora-text-secondary text-xs tracking-wider uppercase opacity-75">Price</span>
                  <p className="text-flora-accent font-bold text-xl">Rs. 250/-</p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button className="bg-flora-accent hover:bg-flora-accent-light text-[#0A1F12] font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-flora-accent/20 cursor-pointer">
                    Explore
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-flora-text/40 hover:border-flora-accent flex items-center justify-center text-flora-text hover:text-flora-accent transition-all duration-300 cursor-pointer">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Text on left, plant on right (Shifted Left) */}
          <div className="glass-card max-w-3xl w-full self-start rounded-3xl overflow-hidden border border-flora-border/50 bg-[#1A2E23]/60 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-flora-accent/5 group">
            <div className="flex flex-col md:flex-row-reverse items-center p-6 md:p-8 gap-6 md:gap-8">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={trendingPlant2}
                  alt="Mint pot plant - desk decoration"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-flora-text tracking-tight">
                  For Your Desks Decorations
                </h3>
                <p className="text-flora-text-secondary text-sm leading-relaxed">
                  The Aglaonema plant is a popular indoor plant known for its striking leaves
                </p>
                <div className="space-y-1">
                  <span className="text-flora-text-secondary text-xs tracking-wider uppercase opacity-75">Price</span>
                  <p className="text-flora-accent font-bold text-xl">Rs. 300/-</p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button className="bg-flora-accent hover:bg-flora-accent-light text-[#0A1F12] font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-flora-accent/20 cursor-pointer">
                    Explore
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-flora-text/40 hover:border-flora-accent flex items-center justify-center text-flora-text hover:text-flora-accent transition-all duration-300 cursor-pointer">
                    <ShoppingBag className="w-4 h-4" />
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

export default TrendingPlants;
