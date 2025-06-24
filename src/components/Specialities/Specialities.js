import React from 'react';
import styles from './Specialities.module.css';


const specialities = [
  { name: 'Bagel' },
  { name: 'Burger' },
  { name: 'Chicken' },
  { name: 'Fish' },
  { name: 'Fish\'Chips'},
  { name: 'Salads' },
  { name: 'Pizza' },
  { name: 'Pasta'},
];

function Specialities() {
  return (
    <div className={styles.spceialitiesContainer}>
      <div className={styles.header}>
        <h2>Specialities</h2>
      </div>
      <div className={styles.speccarouselContainer}>
        <div className={styles.carouselContainer}>
          {specialities.map((item, index) => (
            <div className={styles.carouselCard} key={index}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.filterMenu}>
        <h2>Explore Our Menu</h2>
      </div>
    </div>
  );
}

export default Specialities;