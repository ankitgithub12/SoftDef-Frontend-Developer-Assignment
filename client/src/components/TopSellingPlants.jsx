import React from 'react';
import SectionTitle from './SectionTitle';
import PlantCard from './PlantCard';

import plant1 from '../assets/plant-1.png';
import plant2 from '../assets/plant-2.png';
import plant3 from '../assets/plant-3.png';
import plant4 from '../assets/plant-4.png';
import plant5 from '../assets/plant-5.png';
import plant6 from '../assets/plant-6.png';

const plants = [
  {
    id: 1,
    image: plant1,
    name: 'Aglaonema plant',
    description:
      'A beautiful indoor plant with lush green variegated leaves, perfect for desk and home decoration.',
    price: 'Rs. 300/-',
    rating: 5,
  },
  {
    id: 2,
    image: plant2,
    name: 'Mountain rose',
    description:
      'Compact and elegant succulent, ideal for small spaces and adding a touch of natural beauty.',
    price: 'Rs. 200/-',
    rating: 4,
  },
  {
    id: 3,
    image: plant3,
    name: 'Cactus',
    description:
      'Low-maintenance desert plant in a vibrant pot, perfect for sunny spots and modern decor.',
    price: 'Rs. 150/-',
    rating: 4,
  },
  {
    id: 4,
    image: plant4,
    name: 'Snake plant',
    description:
      'Air-purifying powerhouse with tall, striking leaves — thrives in any lighting condition.',
    price: 'Rs. 400/-',
    rating: 5,
  },
  {
    id: 5,
    image: plant5,
    name: 'Samaveria plant',
    description:
      'Hardy and stylish, this sansevieria variety adds a modern touch to any room.',
    price: 'Rs. 350/-',
    rating: 4,
  },
  {
    id: 6,
    image: plant6,
    name: 'Agave plant',
    description:
      'Bold and architectural succulent with thick, sculptural leaves for statement decor.',
    price: 'Rs. 250/-',
    rating: 4,
  },
];

const TopSellingPlants = () => {
  return (
    <section id="shop" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-flora-bg via-flora-bg-light/30 to-flora-bg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Top Selling Plants" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-8">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              description={plant.description}
              price={plant.price}
              rating={plant.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
