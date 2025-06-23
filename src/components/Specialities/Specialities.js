// components/Specialities.js

import React from 'react';
const specialities = [
  {
    name: 'Thịt bò',
    image: '/asset/img/specialities/meat.jpg',
  },
  {
    name: 'Gà nướng',
    image: '/asset/img/specialities/chicken.jpg',
  },
  {
    name: 'Cơm tấm',
    image: '/asset/img/specialities/rice.jpg',
  },
  {
    name: 'Mì Ý',
    image: '/asset/img/specialities/spaghetti.jpg',
  },
  {
    name: 'Pizza',
    image: '/asset/img/specialities/pizza.jpg',
  },
  {
    name: 'Bánh mì',
    image: '/asset/img/specialities/banhmi.jpg',
  },
];

function Specialities() {
  return (
    <section className="specialities-section">
      <h2 className="section-title">Món ăn nổi bật</h2>
      <div className="specialities-list">
        {specialities.map((item, index) => (
          <div className="speciality-item" key={index}>
            <img src={item.image} alt={item.name} className="speciality-image" />
            <p className="speciality-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialities;