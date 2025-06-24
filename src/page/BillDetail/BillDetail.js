// src/page/BillDetail.js

import React, { useState } from 'react';
import styles from './BillDetail.module.css';

function BillDetail() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    payment: 'cash'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({ ...prev, payment: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'lastName', 'phone', 'address'];
    let newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'Trường bắt buộc';
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Đơn hàng đã được gửi thành công!');
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h1 className={styles["header-h1"]}>THÔNG TIN ĐƠN HÀNG</h1>
        </div>
        <div className={styles["main-content"]}>
          <div className={styles["delivery-section"]}>
            <h2 className={styles["section-title"]}>GIAO HÀNG ĐẾN</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Tên <span className={styles["required"]}>*</span></label>
                <input className={`${styles["form-control"]} ${errors.name ? styles["error"] : ""}`} id="name" value={formData.name} onChange={handleChange} />
                {errors.name && <div className={styles["error-message"]}>{errors.name}</div>}
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Họ <span className={styles["required"]}>*</span></label>
                <input className={`${styles["form-control"]} ${errors.lastName ? styles["error"] : ""}`} id="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <div className={styles["error-message"]}>{errors.lastName}</div>}
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Số điện thoại <span className={styles["required"]}>*</span></label>
                <input className={`${styles["form-control"]} ${errors.phone ? styles["error"] : ""}`} type="tel" id="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <div className={styles["error-message"]}>{errors.phone}</div>}
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Email</label>
                <input className={styles["form-control"]} type="email" id="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Nhập địa chỉ <span className={styles["required"]}>*</span></label>
                <textarea className={`${styles["form-control"]} ${styles["textarea"]} ${errors.address ? styles["error"] : ""}`} id="address" rows={3} value={formData.address} onChange={handleChange}></textarea>
                {errors.address && <div className={styles["error-message"]}>{errors.address}</div>}
              </div>
              <div className={styles["delivery-note"]}>
                Vui lòng nhập và chọn địa chỉ được gợi ý. Nếu không, vui lòng liên hệ hotline để được hỗ trợ.
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Ghi chú</label>
                <textarea className={`${styles["form-control"]} ${styles["textarea"]}`} id="notes" rows={3} value={formData.notes} onChange={handleChange}></textarea>
              </div>
              <h3 className={styles["section-title"]}>PHƯƠNG THỨC THANH TOÁN</h3>
              <div className={styles["shipping-methods"]}>
                <div className={styles["radio-group"]}>
                  <label className={styles["radio-option"]}>
                    <input type="radio" id="paymentCash" name="payment" value="cash" checked={formData.payment === 'cash'} onChange={handleRadioChange} />
                    Thanh toán bằng tiền mặt
                  </label>
                  <label className={styles["radio-option"]}>
                    <input type="radio" id="paymentBank" name="payment" value="bank" checked={formData.payment === 'bank'} onChange={handleRadioChange} />
                    Thanh toán bằng chuyển khoản
                  </label>
                </div>
              </div>
              <button type="submit" className={styles["submit-btn"]}>Đặt Mua</button>
            </form>
          </div>
          <div className={styles["order-summary"]}>
            <div className={styles["summary-header"]}>
              <h4 className={styles["summary-title"]}>CHI TIẾT ĐƠN HÀNG</h4>
            </div>
            <div className={styles["order-item"]}>
              <img src="https://via.placeholder.com/80x80" alt="Gà sốt cay" className={styles["item-image"]} />
              <div className={styles["item-details"]}>
                <div className={styles["item-name"]}>2 GÀ SỐT CAY + 1 KHOAI TÂY CHIÊN + 1 NƯỚC NGỌT</div>
                <div className={styles["item-quantity"]}>x 1</div>
              </div>
              <div className={styles["item-price"]}>95,000 ₫</div>
            </div>
            <hr className={styles["summary-hr"]} />
            <div className={styles["price-breakdown"]}>
              <div className={styles["price-row"]}>
                <span>Chi phí tạm tính</span>
                <span>95,000 ₫</span>
              </div>
              <div className={styles["vat-note"]}>(Đã bao gồm VAT 8%)</div>
              <div className={styles["total-row"]}>
                <span>Tổng Cộng</span>
                <span>95,000 ₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillDetail;