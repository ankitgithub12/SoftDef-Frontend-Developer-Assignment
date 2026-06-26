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
      'The Aglaonema plant is a popular indoor plant known for its striking foliage and easy care requirements.',
    price: 'Rs. 300/-',
  },
  {
    id: 2,
    image: plant2,
    name: 'Plantain Lily',
    description:
      'Hosta is a genus of plants commonly known as hostas, plantain lilies and occasionally...',
    price: 'Rs. 350/-',
  },
  {
    id: 3,
    image: plant3,
    name: 'Cactus',
    description:
      'A cactus is a member of the plant family Cactaceae, a family comprising about...',
    price: 'Rs. 150/-',
  },
  {
    id: 4,
    image: plant4,
    name: 'Swiss cheese Plant',
    description:
      'Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant...',
    price: 'Rs. 400/-',
  },
  {
    id: 5,
    image: plant5,
    name: 'Sansevieria plant',
    description:
      'Sansevieria is a historically recognized genus of flowering plants, native to Africa...',
    price: 'Rs. 450/-',
  },
  {
    id: 6,
    image: plant6,
    name: 'Agave plant',
    description:
      'Agave is a genus of monocots native to the hot and arid regions of the Americas...',
    price: 'Rs. 350/-',
  },
];

const TopSellingPlants = () => {
  return (
    <section id="shop" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-flora-bg pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Top Selling Plants" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              description={plant.description}
              price={plant.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
