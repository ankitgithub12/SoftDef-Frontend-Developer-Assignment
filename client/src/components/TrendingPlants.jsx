import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import trendingPlant1 from '../assets/trending-plant-1.png';
import trendingPlant2 from '../assets/trending-plant-2.png';

const TrendingPlants = () => {
  return (
    <section id="trending" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-flora-bg via-flora-bg-light/50 to-flora-bg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Trendy plants" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8">
          {/* Card 1 — Large plant with right-aligned text */}
          <div className="glass-card overflow-hidden plant-card-hover group">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 p-4">
                <img
                  src={trendingPlant1}
                  alt="Trending indoor foliage plant in a green ceramic pot"
                  className="w-full h-48 sm:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-5 sm:p-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-flora-text">
                  For Your Desks Decorations
                </h3>
                <p className="text-flora-text-secondary text-xs sm:text-sm leading-relaxed">
                  Transform your workspace with beautiful, air-purifying desk
                  plants that bring life and freshness to your environment.
                </p>
                <p className="text-flora-accent font-bold text-lg">Rs. 500/-</p>
                <div className="flex items-center gap-3 pt-2">
                  <Button variant="primary" className="text-xs px-4 py-2">
                    Explore
                  </Button>
                  <Button
                    variant="icon"
                    ariaLabel="Add to cart"
                    icon={<ShoppingCart className="w-4 h-4" />}
                    className="!w-9 !h-9"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Text on left, plant on right */}
          <div className="glass-card overflow-hidden plant-card-hover group">
            <div className="flex flex-col sm:flex-row-reverse items-center">
              <div className="w-full sm:w-1/2 p-4">
                <img
                  src={trendingPlant2}
                  alt="Trending succulent plant in a mint turquoise pot"
                  className="w-full h-48 sm:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-1/2 p-5 sm:p-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-flora-text">
                  For Your Desks Decorations
                </h3>
                <p className="text-flora-text-secondary text-xs sm:text-sm leading-relaxed">
                  Handpicked collection of desk-friendly plants, perfect for
                  adding a touch of nature to your daily routine.
                </p>
                <p className="text-flora-accent font-bold text-lg">Rs. 200/-</p>
                <div className="flex items-center gap-3 pt-2">
                  <Button variant="outline" className="text-xs px-4 py-2">
                    Explore
                  </Button>
                  <Button
                    variant="icon"
                    ariaLabel="View details"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="!w-9 !h-9"
                  />
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
