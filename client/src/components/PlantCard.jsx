import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PlantCard = ({ image, name, description, price }) => {
  const clipId = `wavy-clip-${name.replace(/[^a-zA-Z0-9]/g, '-')}`;

  return (
    <article className="relative flex flex-col pt-[120px] pb-6 px-6 font-sans min-h-[360px] h-[360px] transition-all duration-500 hover:-translate-y-2.5 group cursor-default overflow-visible">
      {/* Custom Wavy SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-500"
        viewBox="0 0 350 450"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={clipId}>
            <path d="M 0,80 C 0,55 15,40 40,40 C 90,40 120,65 160,65 C 210,65 260,20 310,20 C 335,20 350,35 350,60 L 350,410 C 350,432 328,450 310,450 L 40,450 C 22,450 0,432 0,410 Z" />
          </clipPath>
        </defs>
        <foreignObject clipPath={`url(#${clipId})`} width="350" height="450" className="w-full h-full">
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

      {/* Floating Plant Image - Positioned to sit anchored in the wavy dip */}
      <img
        src={image}
        alt={name}
        className="absolute top-[-35px] left-1/2 -translate-x-1/2 w-[190px] h-[190px] object-contain transition-all duration-500 filter drop-shadow-[0_18px_25px_rgba(0,0,0,0.45)] group-hover:scale-106 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_22px_32px_rgba(0,0,0,0.55)] pointer-events-none user-select-none"
      />

      {/* Info Area (Grouped at the bottom to match Figma spacing) */}
      <div className="flex flex-col text-left mt-auto">
        <h3 className="text-[21px] font-semibold text-white tracking-tight mb-[6px] leading-tight select-none">
          {name}
        </h3>
        
        <p className="text-[13.5px] leading-[1.65] text-[#9CA3AF] font-normal select-none mb-4">
          {description}
        </p>

        {/* Price & ShoppingBag Row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[24px] font-bold text-white leading-none select-none">
            {price}
          </span>

          <button
            className="w-[42px] h-[42px] rounded-[10px] border border-[rgba(255,255,255,0.18)] bg-white/5 flex items-center justify-center text-white/90 hover:bg-[#3FAF5D] hover:text-white hover:border-[#3FAF5D] transition-all duration-300 cursor-pointer"
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
