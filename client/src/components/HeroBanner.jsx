import React from 'react';
import { Play, Star, ArrowRight } from 'lucide-react';
import Button from './Button';
import heroPlant from '../assets/hero-plant.png';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-flora-bg via-flora-bg-light to-flora-bg"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-flora-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-flora-accent/5 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-flora-text leading-tight">
                Earth's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-flora-accent to-flora-primary-light">
                  Exhale
                </span>
              </h1>
              <p className="mt-4 text-flora-text-secondary text-sm sm:text-base max-w-md leading-relaxed">
                Explore nature's finest collection for your home and workspace.
                Fresh plants, clean air, and a greener life — delivered to your
                doorstep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button variant="primary">Buy Now</Button>
              <Button
                variant="icon"
                ariaLabel="Watch video"
                icon={<Play className="w-4 h-4" />}
              />
              <span className="text-flora-text-muted text-xs sm:text-sm ml-1">
                View Promo
              </span>
            </div>

            {/* Customer Avatars & Rating */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3].map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`Customer ${i + 1}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-flora-bg object-cover"
                  />
                ))}
              </div>
              <div className="glass-card px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 text-xs sm:text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-flora-text font-medium">4.5</span>
                <span className="text-flora-text-muted">|</span>
                <span className="text-flora-text-secondary">Online store</span>
              </div>
            </div>
          </div>

          {/* Right Side — Hero Plant Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroPlant}
                alt="Large Aglaonema indoor plant in a decorative white pot"
                className="w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] h-auto object-contain animate-float drop-shadow-2xl"
              />

              {/* Floating Info Card */}
              <div className="absolute top-8 right-0 sm:top-12 sm:-right-4 glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 animate-fade-in-up">
                <div>
                  <p className="text-flora-text text-xs sm:text-sm font-medium">
                    Aglaonema plant
                  </p>
                  <p className="text-flora-text-muted text-[10px] sm:text-xs">
                    Best seller
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-flora-accent/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-flora-accent" />
                </div>
              </div>

              {/* Decorative dot pattern */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-flora-accent"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
