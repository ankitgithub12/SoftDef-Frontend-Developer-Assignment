import React from 'react';
import { Star } from 'lucide-react';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    avatar: avatar1,
    rating: 4.5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: avatar2,
    rating: 4.5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: 'Carol Huels',
    avatar: avatar3,
    rating: 4.5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

const CustomerReview = () => {
  return (
    <section className="py-20 customer-review-section relative overflow-hidden">
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Heading */}
        <div className="flex items-center justify-center mb-16">
          <div className="customer-review-heading-container">
            <h2 className="customer-review-heading">
              Customer Review
            </h2>
          </div>
        </div>

        {/* 3 Review Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 font-sans">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card-custom text-left"
            >
              <div className="space-y-6">
                {/* Header: Avatar, Name & Stars */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={`${review.name}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover select-none pointer-events-none"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg sm:text-[19px] tracking-wide leading-tight">
                      {review.name}
                    </h4>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const isHalfStar = review.rating % 1 !== 0 && i === Math.floor(review.rating);
                        const isFilled = i < Math.floor(review.rating);
                        
                        if (isHalfStar) {
                          return (
                            <div key={i} className="relative w-3.5 h-3.5 select-none pointer-events-none">
                              {/* Empty star with yellow outline */}
                              <Star className="absolute top-0 left-0 w-3.5 h-3.5 text-[#e9f908] fill-none" />
                              {/* Half-filled star on top */}
                              <div className="absolute top-0 left-0 w-[50%] h-full overflow-hidden">
                                <Star className="w-3.5 h-3.5 text-[#e9f908] fill-[#e9f908] max-w-none" />
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 select-none pointer-events-none ${
                              isFilled
                                ? 'text-[#e9f908] fill-[#e9f908]'
                                : 'text-[#e9f908] fill-none'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {review.text}
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
