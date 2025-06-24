import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderImage from '../Slider/Photo.svg';
import '../Slider/Slider.css';
function Slider() {
   const slides = [
    {
      title: 'Your Food court\nat home',
      delivery: 'Delivery',
      takeout: 'Takeout',
      sub1: 'Order in',
      sub2: 'Grab and go',
      img: sliderImage
    },
    // thêm slide khác nếu muốn
  ];

  return (
    <div className="slider-container">
      <Swiper spaceBetween={30} slidesPerView={1}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="content">
                <h1 className="title">{slide.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}</h1>

                <div className="buttons">
                  <a href="#" className="btn btn-delivery">
                    <strong>{slide.delivery}</strong><br />
                    <small>{slide.sub1}</small>
                  </a>
                  <a href="#" className="btn btn-takeout">
                    <strong>{slide.takeout}</strong><br />
                    <small>{slide.sub2}</small>
                  </a>
                </div>
              </div>

              <div className="image-container">
                <img src={slide.img} alt="Slider" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
