import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, avatar, rating = 5, review }) => {
  return (
    <article className="glass-card p-5 sm:p-6 plant-card-hover group relative overflow-hidden">
      {/* Decorative quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-10 h-10 text-flora-accent" />
      </div>

      {/* Avatar & Name */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-flora-accent/30"
        />
        <div>
          <h4 className="text-flora-text font-semibold text-sm sm:text-base">
            {name}
          </h4>
          {/* Star Rating */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-flora-text-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-flora-text-secondary text-xs sm:text-sm leading-relaxed">
        {review}
      </p>
    </article>
  );
};

export default TestimonialCard;
