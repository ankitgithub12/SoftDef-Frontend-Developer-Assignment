import React from 'react';
import SectionTitle from './SectionTitle';
import PlantCard from './PlantCard';

import plant1 from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png';
import plant2 from '../assets/5196aba58f7006d90ec0712ac1d01688cde1a537.png';
import plant3 from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png';
import plant4 from '../assets/6d90916507b2b3030961c99c6af0ebac97b86c78.png';
import plant5 from '../assets/95e728282f4fb901ee2edc80783c2fbd7df490c2.png';
import plant6 from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg';

const plants = [
  {
    id: 1,
    image: plant1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant is a popular indoor plant known for its striking foliage and easy care requirements.',
    price: 'Rs. 300/-',
  },
  {
    id: 2,
    image: plant2,
    name: 'Plantain Lilies',
    description: 'Hosta is a genus of plants commonly known as hostas, plantain lilies and occasionally by the Japanese name giboshi.',
    price: 'Rs. 380/-',
  },
  {
    id: 3,
    image: plant3,
    name: 'Cactus',
    description: 'A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some 1750 known species.',
    price: 'Rs. 259/-',
  },
  {
    id: 4,
    image: plant4,
    name: 'Swiss cheese Plant',
    description: 'Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant native to tropical forests of southern Mexico.',
    price: 'Rs. 400/-',
  },
  {
    id: 5,
    image: plant5,
    name: 'Sansevieria plant',
    description: 'Sansevieria is a historically recognized genus of flowering plants, native to Africa, Madagascar and southern Asia.',
    price: 'Rs. 450/-',
  },
  {
    id: 6,
    image: plant6,
    name: 'Agave plant',
    description: 'Agave is a genus of monocots native to the hot and arid regions of the Americas, although some species are also native.',
    price: 'Rs. 359/-',
  },
];

const TopSellingPlants = () => {
  return (
    <section id="shop" className="py-20 bg-[#0f1f10] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f10] via-[#0b180c] to-[#0f1f10] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section label box */}
        <SectionTitle title="Our Top Selling Plants" />

        {/* 3-column grid (stacks to 1 col on mobile, 2 col on sm/md) */}
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
