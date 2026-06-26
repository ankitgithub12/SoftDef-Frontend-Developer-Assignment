import React from 'react';
import { Bookmark } from 'lucide-react';

const PlantCard = ({ image, name, description, price }) => {
  return (
    <article className="bg-[#1a2e1a] rounded-2xl p-5 border border-[#233b23] hover:border-[#4ade80]/30 transition-all duration-300 group flex flex-col justify-between shadow-md">
      {/* Centered Image Area */}
      <div className="flex items-center justify-center min-h-[180px] mb-4 bg-[#0f1f10]/30 rounded-xl p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
        />
      </div>

      {/* Info Area */}
      <div className="flex flex-col flex-1 space-y-2 text-left font-sans">
        <h3 className="text-lg font-bold text-white tracking-tight">
          {name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1 font-normal">
          {description}
        </p>

        {/* Price & Bookmark Row */}
        <div className="flex items-center justify-between pt-3 mt-1">
          <div>
            <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">Price</span>
            <p className="text-[#4ade80] font-bold text-lg mt-0.5">
              {price}
            </p>
          </div>

          <button
            className="w-10 h-10 rounded-xl border border-[#233b23] hover:border-[#4ade80] flex items-center justify-center text-gray-300 hover:text-[#4ade80] hover:bg-[#1a2e1a] transition-all duration-300 cursor-pointer"
            aria-label={`Bookmark ${name}`}
          >
            <Bookmark className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
