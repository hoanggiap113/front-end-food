import React from 'react';
import styles from './CategoryList.module.css';

const categories = [

  { name: 'Bún chả', price: '120.000d' },
  { name: 'Bún trộn', price: '120.000d'},
  { name: 'Gà rán', price: '120.000d'},

];

function CategoryList() {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <h2>Các món ăn</h2>
        <button className={styles.showAll}>Show all</button>
      </div>
      <div className={styles.restaurantCarousel}>
        <div className={styles.carouselContainer}>
          {categories.map((item, index) => (
            <div className={styles.restaurantCard} key={index}>
              <div className={styles.restaurantImage}>
                <div className={styles.foodDetail}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className={styles.restaurantLogo}>
                <button className={styles.addToCart}>Thêm giỏ hàng</button>
                <button className={styles.buyNow}>Mua ngay</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;