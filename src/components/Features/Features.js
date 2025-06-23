// components/Features.js

import React from 'react';

function Features() {
  return (
    <div className="features">
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon">
            <img src="/asset/img/icons/fast-delivery.svg" alt="Fast Delivery" />
          </div>
          <div className="feature-text">
            <strong>Delivery in all parts</strong><br />
            in less than 30 minutes
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src="/asset/img/icons/free-delivery.svg" alt="Free Delivery" />
          </div>
          <div className="feature-text">
            <strong>Free delivery</strong><br />
            from 29 euros
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src="/asset/img/icons/fresh-food.svg" alt="Fresh Products" />
          </div>
          <div className="feature-text">
            <strong>Only fresh</strong><br />
            and French products
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
