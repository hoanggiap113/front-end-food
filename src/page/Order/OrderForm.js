// File: OrderForm.js

import React, { useState } from 'react';
import styles from './OrderForm.module.css';

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
      </div>
      <div className={styles.mainContent}>
        <form className={styles.deliverySection} onSubmit={handleSubmit}>
          <h2 className={styles.sectionTitle}>GIAO HÀNG ĐẺN</h2>

          {['name', 'surname', 'phone', 'email'].map((field) => (
            <div className={styles.formGroup} key={field}>
              <label htmlFor={field}>
                {field === 'name' && 'Tên'}
                {field === 'surname' && 'Họ'}
                {field === 'phone' && 'Số điện thoại'}
                {field === 'email' && 'Email'}{' '}
                {field !== 'email' && <span className={styles.required}>*</span>}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                className={styles.formControl}
                value={formData[field]}
                onChange={handleChange}
                required={field !== 'email'}
              />
            </div>
          ))}

          <div className={styles.formGroup}>
            <label htmlFor="address">
              Nhập địa chỉ <span className={styles.required}>*</span>
            </label>
            <textarea
              id="address"
              className={styles.formControl + ' ' + styles.textarea}
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes">Ghi chú</label>
            <textarea
              id="notes"
              className={styles.formControl + ' ' + styles.textarea}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Ghi chú cho đơn hàng..."
            />
          </div>

          <div className={styles.shippingMethods}>
            <h3 className={styles.sectionTitle}>PHƯƠNG THỊC THANH TOÁN</h3>
            <div className={styles.radioGroup}>
              {['cash', 'bank'].map((type) => (
                <label
                  key={type}
                  className={`${styles.radioOption} ${formData.payment === type ? styles.selected : ''}`}
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

          <button type="submit" className={styles.submitBtn}>
            Đặt mua
          </button>
        </form>

        <div className={styles.orderSummary}>
          <div className={styles.summaryHeader}>
            <h3 className={styles.summaryTitle}>CHI TIẾT ĐƠN HÀNG</h3>
          </div>
          <div className={styles.orderItem}>
            <img
              src="https://via.placeholder.com/80x80.png?text=Food"
              alt="Gà sốt cay"
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <div className={styles.itemName}>
                2 GÀ SỐT CAY + 1 KHOAI TÂY CHIÊN Vừa + 1 NƯỚc NGỌT
              </div>
              <div className={styles.itemQuantity}>x 1</div>
            </div>
            <div className={styles.itemPrice}>+ 95,000 ₫</div>
          </div>

          <div className={styles.priceBreakdown}>
            <div className={styles.priceRow}>
              <span>Chi phí tạm tính</span>
              <span>95,000 ₫</span>
            </div>
            <div className={styles.priceRow + ' ' + styles.vatNote}>
              Đã bao gồm giá thuế VAT 8%
            </div>
            <div className={styles.totalRow}>
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