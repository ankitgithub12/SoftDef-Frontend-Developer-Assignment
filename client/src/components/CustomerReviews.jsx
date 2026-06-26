import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';

import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

const reviews = [
  {
    id: 1,
    name: 'Shelly Runse',
    avatar: avatar1,
    rating: 5,
    review:
      'Good service for the customer. Agent very friendly and fast response. Recomended seller...',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: avatar2,
    rating: 5,
    review:
      'Good service for the customer. Agent very friendly and fast response. Recomended seller...',
  },
  {
    id: 3,
    name: 'Carol Runis',
    avatar: avatar3,
    rating: 5,
    review:
      'Good service for the customer. Agent very friendly and fast response. Recomended seller...',
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-flora-bg pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Customer Review" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
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
