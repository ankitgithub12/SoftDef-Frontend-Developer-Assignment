import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

import plant1 from '../assets/plant-1.png';
import plant4 from '../assets/plant-4.png';
import trendingPlant1 from '../assets/trending-plant-1.png';
import trendingPlant2 from '../assets/trending-plant-2.png';

const o2Plants = [
  { id: 1, image: plant1, name: 'Aglaonema' },
  { id: 2, image: trendingPlant1, name: 'Money Plant' },
  { id: 3, image: plant4, name: 'Snake Plant' },
  { id: 4, image: trendingPlant2, name: 'Aloe Vera' },
];

const O2Plants = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-flora-bg via-flora-bg-light/50 to-flora-bg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Best o2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8">
          {/* Left — Plant thumbnails grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
            {o2Plants.map((plant) => (
              <div
                key={plant.id}
                className="glass-card p-4 flex flex-col items-center justify-center plant-card-hover group"
              >
                <img
                  src={plant.image}
                  alt={`${plant.name} — O₂ producing plant`}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <p className="text-flora-text-secondary text-xs sm:text-sm mt-2 text-center font-medium">
                  {plant.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right — Text content */}
          <div className="space-y-5 md:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-flora-text leading-tight">
              We Have Small And Best O2 Plants{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flora-accent to-flora-primary-light">
                Collection
              </span>
            </h3>
            <p className="text-flora-text-secondary text-sm sm:text-base leading-relaxed">
              Discover our curated collection of the finest O₂ producing plants
              for your home and office. Each plant is carefully selected for its
              air-purifying qualities and aesthetic beauty.
            </p>
            <p className="text-flora-text-muted text-xs sm:text-sm leading-relaxed">
              Many indoor plants are scientifically proven to filter harmful
              toxins and chemicals from the air while releasing fresh oxygen,
              making your living spaces healthier and more vibrant.
            </p>
            <Button variant="primary" className="mt-2">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;
