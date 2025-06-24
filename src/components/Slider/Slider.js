import React from 'react';
import styles from './Slider.module.css';
import foodImage from '../../assets/img/Slider/Photo.svg'; // Updated path

function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your Food court<br />at home</h1>
        <div className={styles.buttons}>
          <a href="#delivery" className={`${styles.btn} ${styles.btnDelivery}`}>Delivery<br />Order in</a>
          <a href="#takeout" className={`${styles.btn} ${styles.btnTakeout}`}>Takeout<br />Grab and go</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={foodImage} alt="Food" className={styles.foodImage} />

        <span className={styles.caption}>Fresh ingredients</span>
      </div>
    </div>
  );
}

export default Slider;