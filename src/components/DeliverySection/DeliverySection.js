import React from 'react';
import styles from './DeliverySection.module.css';
function DeliverySection() {
  return (
    <div className={styles.deliverySection}>
      <div className={styles.address}>
        <div className={styles.addressInfo}>
          <h2 className={styles.sectionTitle}>Your nearest restaurants</h2>
          <p className={styles.sectionDescription}>
            Each kitchen works with its own delivery area to deliver food to you as soon as possible
          </p>
        </div>
        <div className={styles.addressForm}>
          <div className={styles.addressInputContainer}>
            <input type="text" className={styles.addressInput} placeholder="Enter your address" />
          </div>
          <button className={styles.submitButton}>send</button>
        </div>
      </div>
      <div className={styles.deliveryMap}></div>
    </div>
  );
}

export default DeliverySection;