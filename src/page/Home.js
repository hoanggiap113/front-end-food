import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Features from '../components/Features/Features';
import CategoryList from '../components/CategoryList/CategoryList';
import DeliverySection from '../components/DeliverySection/DeliverySection';
import Specialities from '../components/Specialities/Specialities';

function Home() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Slider />
      <Features />
      <CategoryList />
      <DeliverySection />
      <Specialities />
      </div>
    </>
  );
}

export default Home;
