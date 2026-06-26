import React from 'react';
import PlantCard from './PlantCard';
import SectionTitle from './SectionTitle';

import plant1 from '../assets/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6.png'; // Aglaonema
import plant2 from '../assets/b48312dbddc890f7f35ef3964ae1e7900b89782c.png'; // Plantain Lilies
import plant3 from '../assets/6d90916507b2b3030961c99c6af0ebac97b86c78.png'; // Cactus
import plant4 from '../assets/5196aba58f7006d90ec0712ac1d01688cde1a537.png'; // Swiss cheese Plant
import plant5 from '../assets/eb0351a5771ed55c7f3454bcce697dfe63237769.png'; // Sansevieria plant
import plant6 from '../assets/444fba49a2674d2262c5455bcc501cb91b314490.png'; // Agave plant

const plants = [
  {
    id: 1,
    image: plant1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 'Rs. 300/-',
  },
  {
    id: 2,
    image: plant2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs. 380/-',
  },
  {
    id: 3,
    image: plant3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs. 259/-',
  },
  {
    id: 4,
    image: plant4,
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
  },
  {
    id: 5,
    image: plant5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
  },
  {
    id: 6,
    image: plant6,
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
  },
];

const TopSellingPlants = () => {
  return (
    <section 
      id="shop" 
      className="pt-32 pb-20 relative overflow-visible"
      style={{ background: 'radial-gradient(circle at top, #142313 0%, #0c140a 70%, #070c06 100%)' }}
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Title with Custom Brackets */}
        <SectionTitle title="Our Top Selling Plants" className="mb-[85px]" />

        {/* 3-column grid (stacks to 1 col on mobile, 2 col on sm/md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[60px_40px]">
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
