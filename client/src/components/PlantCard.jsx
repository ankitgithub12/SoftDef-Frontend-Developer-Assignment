import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PlantCard = ({ image, name, description, price }) => {
  return (
    <article className="relative flex flex-col pt-[115px] pb-6 px-6 font-sans min-h-[410px] transition-all duration-500 hover:-translate-y-2.5 group cursor-default overflow-visible">
      {/* Custom Wavy SVG Background */}
      <svg 
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-500"
        viewBox="0 0 350 450" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,80 C 0,55 15,40 40,40 C 90,40 120,65 160,65 C 210,65 260,20 310,20 C 335,20 350,35 350,60 L 350,422 C 350,438 338,450 322,450 L 28,450 C 12,450 0,438 0,422 Z"
          fill="rgba(28, 41, 25, 0.72)" 
          stroke="rgba(255, 255, 255, 0.08)" 
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-white/15 group-hover:fill-[rgba(32,48,29,0.85)]"
        />
      </svg>

      {/* Floating Plant Image */}
      <img
        src={image}
        alt={name}
        className="absolute top-[-95px] left-1/2 -translate-x-1/2 w-[220px] h-[220px] object-contain transition-all duration-500 filter drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] group-hover:scale-106 group-hover:-translate-y-1 group-hover:drop-shadow-[0_22px_32px_rgba(0,0,0,0.55)] pointer-events-none user-select-none"
      />

      {/* Info Area */}
      <div className="flex flex-col flex-1 text-left">
        <h3 className="text-[22px] font-semibold text-white tracking-tight mb-[8px] leading-tight select-none">
          {name}
        </h3>
        
        <p className="text-[14px] leading-relaxed text-white/70 font-normal mb-5 select-none flex-1">
          {description}
        </p>

        {/* Price & ShoppingBag Row */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-[26px] font-bold text-white leading-none select-none">
            {price}
          </span>

          <button
            className="w-[44px] h-[44px] rounded-[12px] border border-[rgba(255,255,255,0.18)] bg-white/5 flex items-center justify-center text-white/90 hover:bg-[#3FAF5D] hover:text-white hover:border-[#3FAF5D] transition-all duration-300 cursor-pointer"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
