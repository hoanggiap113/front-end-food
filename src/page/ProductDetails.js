// components/ProductDetails.js

import React, { useState, useEffect } from 'react';
import './ProductDetails.css';

function ProductDetails({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/asset/img/category-food/banh mi.jpg',
    '/asset/img/category-food/banh mi.jpg', // dùng lại ảnh tạm nếu chưa có ảnh khác
    '/asset/img/category-food/banh mi.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="popup-flex">
          <div className="left-section">
            <div className="image-slider">
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={src} alt="Product" />
                </div>
              ))}
            </div>
          </div>

          <div className="right-section">
            <div className="product-tabs">
              <div className="tab active">Tên sản phẩm</div>
            </div>

            <div className="tab-content active">
              <div className="product-info">
                <div className="product-options">
                  <div className="form-group">
                    <label className="form-label">Giá</label>
                    <input type="text" className="form-input" value="120.000₫" readOnly />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mô tả</label>
                    <input type="text" className="form-input" value="Ngon tuyệt đỉnh" readOnly />
                  </div>

                  <div className="option-group">
                    <label className="option-label">Số lượng</label>
                    <select className="option-select">
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div className="option-group">
                    <label className="option-label">Voucher</label>
                    <select className="option-select">
                      <option>Chọn voucher</option>
                      <option>Giảm 10%</option>
                      <option>Giảm 20%</option>
                      <option>Freeship</option>
                    </select>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="btn btn-secondary">Thêm vào giỏ</button>
                  <button className="btn btn-primary">Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <div className="reviews-header">Đánh giá sản phẩm</div>
          {[...Array(10)].map((_, i) => (
            <div className="review-item" key={i}>
              <div className="review-header">
                <span className="reviewer-name">Người dùng {i + 1}</span>
                <span className="rating">{i % 3 === 0 ? '★★★★☆' : '★★★★★'}</span>
              </div>
              <div className="review-text">
                Đây là một nhận xét ví dụ để hiển thị phần đánh giá của sản phẩm. Nội dung thay đổi tùy người.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;