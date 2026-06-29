import React from 'react';
import { ShoppingBag } from 'lucide-react';
import SectionTitle from './SectionTitle';
import plant1 from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'; // Plantain Lilies
import plant2 from '../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png'; // Succulent in light blue/cyan pot

const TrendyPlants = () => {
  return (
    <section id="trending" className="py-24 bg-transparent relative">
      {/* Background decoration glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Section Heading */}
        <SectionTitle title="Our Trendy plants" />

        {/* Cards Stack */}
        <div className="flex flex-col gap-24 mt-20">

          {/* Card 1: Plant on left, Details on right */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 group shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Plant Image container with overflow */}
              <div className="w-full md:w-1/2 flex justify-center relative md:-mt-24 md:-mb-12 z-10">
                <img
                  src={plant1}
                  alt="For Your Desks Decorations"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>

              {/* Plant Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left font-sans z-20">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    For Your Desks Decorations
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                    I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-white font-extrabold text-2xl md:text-3xl">Rs. 599/-</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button
                      className="w-12 h-12 rounded-2xl border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Details on left, Plant on right */}
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 group shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Plant Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left font-sans order-2 md:order-1 z-20">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    For Your Desks Decorations
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
                    The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-white font-extrabold text-2xl md:text-3xl">Rs. 399/-</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button
                      className="w-12 h-12 rounded-2xl border border-white/40 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Plant Image container with overflow */}
              <div className="w-full md:w-1/2 flex justify-center relative md:-mt-24 md:-mb-12 order-1 md:order-2 z-10">
                <img
                  src={plant2}
                  alt="For Your Desks Decorations"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendyPlants;
