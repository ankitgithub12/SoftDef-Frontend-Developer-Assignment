import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReview from './components/CustomerReview';
import BestO2 from './components/BestO2';
import Footer from './components/Footer';
import backgroundPlant from './assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1f10] font-sans antialiased text-white selection:bg-[#4ade80]/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <div className="relative">
          {/* Giant shared background topiary plant spanning Hero & TrendyPlants */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[750px] lg:w-[950px] pointer-events-none z-0 flex justify-center">
            <img
              src={backgroundPlant}
              alt="Large round topiary plant background decoration"
              className="w-full h-auto object-contain opacity-85 mix-blend-lighten select-none pointer-events-none"
            />
          </div>
          <Hero />
          <TrendyPlants />
        </div>
        <TopSellingPlants />
        <CustomerReview />
        <BestO2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
