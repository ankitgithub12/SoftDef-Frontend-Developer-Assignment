import React from 'react';
import { ShoppingBag } from 'lucide-react';

const PlantCard = ({ image, name, description, price }) => {
  return (
    <article className="glass-card overflow-hidden border border-flora-border/40 bg-[#1A2E23]/60 backdrop-blur-md rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-flora-accent/5 group flex flex-col p-5">
      {/* Image Area */}
      <div className="flex items-center justify-center min-h-[160px] sm:min-h-[200px] mb-4">
        <img
          src={image}
          alt={`${name} — indoor plant`}
          className="w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-44 object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info Area */}
      <div className="flex flex-col flex-1 space-y-2 text-left">
        <h3 className="text-lg font-bold text-flora-text tracking-tight">
          {name}
        </h3>
        <p className="text-flora-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Price & Actions Row */}
        <div className="flex items-center justify-between pt-3 mt-2">
          <div>
            <span className="text-flora-text-secondary text-[11px] tracking-wider uppercase opacity-75">Price</span>
            <p className="text-flora-accent font-bold text-lg">
              {price}
            </p>
          </div>

          <button
            className="w-10 h-10 rounded-xl border border-flora-text/30 hover:border-flora-accent flex items-center justify-center text-flora-text hover:text-flora-accent transition-all duration-300 cursor-pointer"
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

