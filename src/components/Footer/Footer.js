import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/img/logo.png';
import appStore from '../assets/img/appstore.png';
import googlePlay from '../assets/img/googleplay.png';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.footerTopRight}>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>Concept</li>
              <li>Franchise</li>
              <li>Business</li>
              <li>Restaurant signup</li>
              <li>For investors</li>
            </ul>
          </div>
          <div>
            <h3>Get help</h3>
            <ul>
              <li>Read FAQs</li>
              <li>Restaurants</li>
              <li>Specialities</li>
              <li>sign up to deliver</li>
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <ul>
              <li>kEneDyKitchen TimesCity</li>
              <li>Century Tower TimesCity HaNoi</li>
              <li>6666 8386 8888</li>
              <li>Contact: @kEneDyKitchen.insights.is</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <a href="#appstore"><img src={appStore} alt="App Store" /></a>
          <a href="#googleplay"><img src={googlePlay} alt="Google Play" /></a>
        </div>
        <div className={styles.footerBottomRight}>
          <span className={styles.cl}>Privacy</span>
          <span className={styles.cl}>Terms</span>
          <span className={styles.cl}>© 2025 kEneDyKitchen</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;