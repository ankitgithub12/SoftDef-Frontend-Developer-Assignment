import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const reviews = [
  {
    id: 1,
    name: 'Steffy Susan',
    avatar: avatar1,
    rating: 5,
    review:
      'Absolutely love my new Aglaonema! The quality is amazing, and it arrived perfectly packaged. My desk has never looked better. FloraVision is my go-to for indoor plants!',
  },
  {
    id: 2,
    name: 'Luka Sarfan',
    avatar: avatar2,
    rating: 5,
    review:
      'Great selection and fast delivery. The snake plant I ordered is thriving beautifully. The customer service team was also very helpful with care tips. Highly recommend!',
  },
  {
    id: 3,
    name: 'Dora Harsh',
    avatar: avatar3,
    rating: 4,
    review:
      'Beautiful plants at great prices! I ordered a collection for my living room and every single one arrived healthy and vibrant. Will definitely be ordering more soon.',
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-flora-bg via-flora-bg-light/30 to-flora-bg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Customer Review" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-8">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              name={review.name}
              avatar={review.avatar}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
