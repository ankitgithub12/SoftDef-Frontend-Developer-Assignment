import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, avatar, rating = 5, review }) => {
  return (
    <article className="glass-card p-6 border border-flora-border/50 bg-[#1A2E23]/60 backdrop-blur-md rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-flora-accent/5 group relative overflow-hidden flex flex-col justify-between">
      <div>
        {/* Avatar & Name */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover border-2 border-flora-accent"
          />
          <div className="text-left">
            <h4 className="text-flora-text font-bold text-sm sm:text-base tracking-wide">
              {name}
            </h4>
            {/* Star Rating */}
            <div className="flex items-center gap-0.5 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-flora-text-muted/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-flora-text-secondary text-sm leading-relaxed italic text-left">
          "{review}"
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;

