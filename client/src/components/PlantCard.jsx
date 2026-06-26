import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const PlantCard = ({ image, name, description, price, rating = 4.5 }) => {
  return (
    <article className="glass-card overflow-hidden plant-card-hover group flex flex-col">
      {/* Image Area */}
      <div className="relative bg-flora-bg-light/50 p-4 sm:p-6 flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
        <img
          src={image}
          alt={`${name} — indoor plant`}
          className="w-32 sm:w-40 md:w-44 h-32 sm:h-40 md:h-44 object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-flora-card/80 flex items-center justify-center text-flora-text-muted hover:text-red-400 hover:bg-flora-card transition-all duration-300 cursor-pointer"
          aria-label={`Add ${name} to wishlist`}
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Info Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-flora-text truncate">
          {name}
        </h3>
        <p className="text-flora-text-muted text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed flex-1">
          {description}
        </p>

        {/* Price & Actions Row */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-flora-border/50">
          <div>
            <p className="text-flora-accent font-bold text-sm sm:text-base">
              {price}
            </p>
            <div className="flex items-center gap-0.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-flora-text-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            className="w-9 h-9 rounded-lg bg-flora-accent/10 hover:bg-flora-accent/20 flex items-center justify-center text-flora-accent transition-all duration-300 cursor-pointer"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
