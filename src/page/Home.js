import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import CategoryList from '../components/CategoryList/CategoryList';
// import DeliverySection from '../components/DeliverySection/DeliverySection';
import Specialities from '../components/Specialities/Specialities';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';

function Home() {
  const { isLoggedIn, userName, token } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Redux State on Home:", { isLoggedIn, userName, token }); // Kiểm tra trạng thái khi component mount hoặc thay đổi
  }, [isLoggedIn, userName, token]);

  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <CategoryList />
        {/* <DeliverySection /> */}
        <Specialities />
        <Footer />
      </div>
    </>
  );
}

export default Home;