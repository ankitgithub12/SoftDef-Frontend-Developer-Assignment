import React from 'react';
import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    avatar: avatar1,
    rating: 4.5,
    text: 'Best online plant shopping experience! The plants arrived healthy and beautiful, perfectly packed.',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: avatar2,
    rating: 5,
    text: 'Good service for the customer. Agent very friendly and fast response. Recomended seller...',
  },
  {
    id: 3,
    name: 'Carol Hueis',
    avatar: avatar3,
    rating: 5,
    text: 'Good service for the customer. Agent very friendly and fast response. Recomended seller...',
  },
];

const CustomerReview = () => {
  return (
    <section className="py-20 bg-[#0f1f10] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle title="Customer Review" />

        {/* 3 Review Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 font-sans">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1a2e1a] rounded-3xl p-6 border border-[#233b23] hover:border-[#4ade80]/30 transition-all duration-300 flex flex-col justify-between shadow-lg text-left"
            >
              <div className="space-y-4">
                {/* Header: Avatar, Name & Stars */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={review.avatar}
                    alt={`${review.name}'s avatar`}
                    className="w-12 h-12 rounded-full border border-[#4ade80] object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold text-base tracking-wide">
                      {review.name}
                    </h4>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const isHalfStar = review.rating % 1 !== 0 && i === Math.floor(review.rating);
                        const isFilled = i < Math.floor(review.rating);
                        return (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              isFilled || isHalfStar
                                ? 'text-[#4ade80] fill-[#4ade80]'
                                : 'text-gray-600'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal italic">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReview;
