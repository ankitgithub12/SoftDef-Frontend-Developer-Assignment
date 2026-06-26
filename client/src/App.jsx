import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReview from './components/CustomerReview';
import BestO2 from './components/BestO2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1f10] font-sans antialiased text-white selection:bg-[#4ade80]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrendyPlants />
        <TopSellingPlants />
        <CustomerReview />
        <BestO2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
