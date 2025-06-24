// components/Category.js

import React from 'react';


const foodList = [
  {
    name: 'Salad ức gà',
    price: '120.000d',
    image: '/asset/img/category-food/72d9af964d384fc2a16fd087c1062a7c.jpg',
  },
  {
    name: 'Bánh mỳ',
    price: '120.000d',
    image: '/asset/img/category-food/banh mi.jpg',
  },
  {
    name: 'Burger',
    price: '120.000d',
    image: '/asset/img/category-food/buger.jpg',
  },
  {
    name: 'Pizza',
    price: '120.000d',
    image: '/asset/img/category-food/pizza.jpg',
  },
  {
    name: 'Bún chả',
    price: '120.000d',
    image: '/asset/img/category-food/bundau.jpg',
  },
  {
    name: 'Bún trộn',
    price: '120.000d',
    image: '/asset/img/category-food/buntron.jpg',
  },
  {
    name: 'Gà rán',
    price: '120.000d',
    image: '/asset/img/category-food/chickenfried.jpg',
  },
  {
    name: 'Nem rán',
    price: '120.000d',
    image: '/asset/img/category-food/nemran.jpg',
  },
  {
    name: 'Phở gà',
    price: '120.000d',
    image: '/asset/img/category-food/pho.jpg',
  },
  {
    name: 'Cơm tấm',
    price: '120.000d',
    image: '/asset/img/category-food/rice.jpg',
  },
  {
    name: 'Spaghetti',
    price: '120.000d',
    image: '/asset/img/category-food/spageti.jpg',
  },
  {
    name: 'Gỏi cuốn',
    price: '120.000d',
    image: '/asset/img/category-food/springroll.jpg',
  },
];

function CategoryList() {
  return (
    <div className="category-container">
      <div className="category-header">
        <h2>Các món ăn</h2>
        <button className="show-all">Show all</button>
      </div>

      <div className="carousel-container">
        {foodList.map((food, idx) => (
          <div className="restaurant-card" key={idx}>
            <div className="restaurant-image">
              <img src={food.image} alt={food.name} />
              <div className="food-detail">
                <h3>{food.name}</h3>
                <p>{food.price}</p>
              </div>
            </div>
            <div className="restaurant-logo">
              <button className="add-to-cart">Thêm giỏ hàng</button>
              <button className="buy-now">Mua ngay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
