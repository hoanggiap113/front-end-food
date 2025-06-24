import React from 'react';
import styles from './Features.module.css';

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.feature}>
        <div className={styles.featureText}>
          <strong>Delivery in all parts</strong><br />
          in less than 30 minutes
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureText}>
          <strong>Free delivery</strong><br />
          from 29 euros
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureText}>
          <strong>Only fresh</strong><br />
          and French products
        </div>
      </div>
    </div>
  );
}

export default Features;