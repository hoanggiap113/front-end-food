// File: OrderForm.js

import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    payment: 'cash',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePaymentChange = (e) => {
    setFormData((prev) => ({ ...prev, payment: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'surname', 'phone', 'address'];
    const valid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!valid) {
      alert('Vui lòng điền đủ thông tin.');
      return;
    }
    setSubmitted(true);
    alert('Cảm ơn bạn đã đặt hàng!');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
      </div>
      <div className="main-content">
        <form className="delivery-section" onSubmit={handleSubmit}>
          <h2 className="section-title">GIAO HÀNG ĐẺN</h2>

          {['name', 'surname', 'phone', 'email'].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                {field === 'name' && 'Tên'}
                {field === 'surname' && 'Họ'}
                {field === 'phone' && 'Số điện thoại'}
                {field === 'email' && 'Email'}{' '}
                {field !== 'email' && <span className="required">*</span>}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                className="form-control"
                value={formData[field]}
                onChange={handleChange}
                required={field !== 'email'}
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="address">
              Nhập địa chỉ <span className="required">*</span>
            </label>
            <textarea
              id="address"
              className="form-control textarea"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Ghi chú</label>
            <textarea
              id="notes"
              className="form-control textarea"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Ghi chú cho đơn hàng..."
            />
          </div>

          <div className="shipping-methods">
            <h3 className="section-title">PHƯƠNG THỊC THANH TOÁN</h3>
            <div className="radio-group">
              {['cash', 'bank'].map((type) => (
                <label
                  key={type}
                  className={`radio-option ${formData.payment === type ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={type}
                    checked={formData.payment === type}
                    onChange={handlePaymentChange}
                  />
                  <span>
                    {type === 'cash' ? 'Thanh toán bằng tiền mặt' : 'Thanh toán bằng chuyển khoản'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Đặt mua
          </button>
        </form>

        <div className="order-summary">
          <div className="summary-header">
            <h3 className="summary-title">CHI TIẾT ĐƠN HÀNG</h3>
          </div>
          <div className="order-item">
            <img
              src="https://via.placeholder.com/80x80.png?text=Food"
              alt="Gà sốt cay"
              className="item-image"
            />
            <div className="item-details">
              <div className="item-name">
                2 GÀ SỐT CAY + 1 KHOAI TÂY CHIÊN Vừa + 1 NƯỚc NGỌT
              </div>
              <div className="item-quantity">x 1</div>
            </div>
            <div className="item-price">+ 95,000 ₫</div>
          </div>

          <div className="price-breakdown">
            <div className="price-row">
              <span>Chi phí tạm tính</span>
              <span>95,000 ₫</span>
            </div>
            <div className="price-row vat-note">
              Đã bao gồm giá thuế VAT 8%
            </div>
            <div className="total-row">
              <span>Tổng Cộng</span>
              <span>95,000 ₫</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;