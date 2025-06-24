// components/Cart.js

import React, { useState, useEffect } from 'react';
import './Cart.css';

const initialItems = [
  { id: 1, name: 'Tên đồ ăn', quantity: 1, price: 150000 },
  { id: 2, name: 'Tên đồ ăn', quantity: 2, price: 250000 },
  { id: 3, name: 'Tên đồ ăn', quantity: 1, price: 120000 },
  { id: 4, name: 'Tên đồ ăn', quantity: 3, price: 80000 },
];

function Cart() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(0);

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

  return (
    <div className="cart-container">
      <h1 className="cart-header">Cart</h1>

      <div className="cart-items">
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">Ảnh</div>
            <div className="item-details">
              <div className="item-name">{item.name}</div>
            </div>
            <div className="item-actions">
              <button className="delete-btn" onClick={() => removeItem(item.id)}>Xóa</button>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => decrease(item.id)}>−</button>
                <div className="quantity-display">{item.quantity}</div>
                <button className="quantity-btn" onClick={() => increase(item.id)}>+</button>
              </div>
              <div className="item-price">{formatCurrency(item.price)}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total-section">
          <span className="total-label">Tổng tiền:</span>
          <span className="total-amount">{formatCurrency(total)}</span>
        </div>
        <button className="buy-now-btn">Mua ngay</button>
      </div>
    </div>
  );
}

export default Cart;
