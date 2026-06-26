import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PlantCard = ({ image, name, description, price }) => {
  return (
    <article className="bg-[#1a2e1a]/30 backdrop-blur-md rounded-[35px] p-5 border border-[#233b23]/50 hover:border-[#4ade80]/30 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-[#4ade80]/5">
      {/* Centered Image Area */}
      <div className="flex items-center justify-center min-h-[180px] mb-4 bg-[#0f1f10]/30 rounded-[25px] p-4 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
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

        {/* Price & ShoppingBag Row */}
        <div className="flex items-center justify-between pt-3 mt-1">
          <div>
            <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold">Price</span>
            <p className="text-white font-extrabold text-lg mt-0.5">
              {price}
            </p>
          </div>

          <button
            className="w-10 h-10 rounded-xl border border-white/30 bg-white/5 hover:bg-white hover:text-black hover:border-white flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
