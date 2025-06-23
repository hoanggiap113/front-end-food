// components/DeliverySection.js

import React from 'react';

function DeliverySection() {
  return (
    <section className="delivery-section">
      <div className="address">
        <div className="address-info">
          <h2 className="section-title">Your nearest restaurants</h2>
          <p className="section-description">
            Each kitchen works with its own delivery area to deliver food to you as soon as possible
          </p>
        </div>

        <div className="address-form">
          <div className="address-input-container">
            <div className="location-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <input type="text" className="address-input" placeholder="Enter delivery address" />
          </div>
          <button className="submit-button">send</button>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;
