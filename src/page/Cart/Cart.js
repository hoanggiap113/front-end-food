// components/Cart.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
const initialItems = [
  { id: 1, name: 'Tên đồ ăn', quantity: 1, price: 150000 },
  { id: 2, name: 'Tên đồ ăn', quantity: 2, price: 250000 },
  { id: 3, name: 'Tên đồ ăn', quantity: 1, price: 120000 },
  { id: 4, name: 'Tên đồ ăn', quantity: 3, price: 80000 },
];

function Cart() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // 👉 Hook để điều hướng

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [items]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const increase = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrease = (id) => {
    setItems(items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
      setItems([]);
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["cart-container"]}>
        <h1 className={styles["cart-header"]}>Cart</h1>
        <button className={styles["close-cart-btn"]} onClick={() => navigate(-1)}>×</button>
        <div className={styles["cart-items"]}>
          {items.map(item => (
            <div className={styles["cart-item"]} key={item.id}>
              <div className={styles["item-image"]}>Ảnh</div>
              <div className={styles["item-details"]}>
                <div className={styles["item-name"]}>{item.name}</div>
              </div>
              <div className={styles["item-actions"]}>
                <button className={styles["delete-btn"]} onClick={() => removeItem(item.id)}>Xóa</button>
                <div className={styles["quantity-controls"]}>
                  <button className={styles["quantity-btn"]} onClick={() => decrease(item.id)}>−</button>
                  <div className={styles["quantity-display"]}>{item.quantity}</div>
                  <button className={styles["quantity-btn"]} onClick={() => increase(item.id)}>+</button>
                </div>
                <div className={styles["item-price"]}>{formatCurrency(item.price)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["cart-footer"]}>
          <div className={styles["total-section"]}>
            <span className={styles["total-label"]}>Tổng tiền:</span>
            <span className={styles["total-amount"]}>{formatCurrency(total)}</span>
          </div>
          <button className={styles["buy-now-btn"]} onClick={() => navigate('/order')}>Mua ngay</button>
          <button className={styles["clear-cart-btn"]} onClick={clearCart}>Xóa giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;