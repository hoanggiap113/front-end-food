// components/OrderListPage.js

import React, { useState } from 'react';
import './OrderList.css';

const orders = [
  {
    id: '001',
    product: 'Bánh mỳ',
    total: '35.000 VND',
    date: '15/06/2025',
    status: 'processing',
    action: 'Chi tiết'
  },
  {
    id: '002',
    product: 'Bánh mỳ',
    total: '35.000 VND',
    date: '15/06/2025',
    status: 'completed',
    action: 'Đánh giá'
  },
  {
    id: '003',
    product: 'Phở gà',
    total: '40.000 VND',
    date: '13/06/2025',
    status: 'unpaid',
    action: 'Thanh toán'
  },
  {
    id: '004',
    product: 'Phở gà',
    total: '40.000 VND',
    date: '13/06/2025',
    status: 'processing',
    action: 'Theo dõi'
  },
  {
    id: '005',
    product: 'Gà rán',
    total: '40.000 VND',
    date: '11/06/2025',
    status: 'unpaid',
    action: 'Thanh toán'
  },
  {
    id: '006',
    product: 'Gà rán',
    total: '40.000 VND',
    date: '11/06/2025',
    status: 'completed',
    action: 'Mua lại'
  },
  {
    id: '007',
    product: 'Gà rán',
    total: '40.000 VND',
    date: '11/06/2025',
    status: 'processing',
    action: 'Chi tiết'
  },
];

function OrderList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Trang chủ');

  const filteredOrders = orders.filter(o =>
    o.id.includes(searchTerm) ||
    o.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusClass = status => {
    switch (status) {
      case 'processing': return 'status-processing';
      case 'completed': return 'status-completed';
      case 'unpaid': return 'status-unpaid';
      default: return 'status-pending';
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="logo">SHOP LOGO</div>
          <div className="nav-menu">
            {["Trang chủ", "Menu", "Giới thiệu", "Liên hệ", "Đăng nhập", "🛒"].map(label => (
              <button
                key={label}
                className={`nav-btn ${activeTab === label ? 'active' : ''}`}
                onClick={() => setActiveTab(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm đơn hàng..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">Tìm kiếm</button>
        </div>
      </div>

      <div className="order-section">
        <h2 className="section-title">Danh sách đơn hàng</h2>

        {filteredOrders.map(order => (
          <div className="order-item" key={order.id}>
            <div className="order-info">
              <div className="order-title">Đơn hàng #{order.id}</div>
              <div className="order-details">
                Sản phẩm: {order.product}<br />
                Tổng tiền: {order.total} | Ngày đặt: {order.date}
              </div>
            </div>
            <div className="order-status">
              <span className={`status-btn ${statusClass(order.status)}`}>
                {order.status === 'completed' ? 'Hoàn thành' :
                 order.status === 'unpaid' ? 'Chưa thanh toán' :
                 'Đang xử lý'}
              </span>
              <button className={order.action === 'Thanh toán' ? 'payment-btn' : 'action-btn'}>
                {order.action}
              </button>
              {order.status === 'unpaid' && <button className="action-btn">Hủy đơn</button>}
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="logo">SHOP LOGO</div>
          <div className="social-links">
            <a href="#" className="social-btn facebook">f</a>
            <a href="#" className="social-btn twitter">t</a>
            <a href="#" className="social-btn google">g+</a>
            <a href="#" className="social-btn linkedin">in</a>
          </div>
        </div>
        <div className="contact-info">
          <span>📍 Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</span>
          <span>📞 Hotline: 1900-1234</span>
          <span>✉️ Email: info@shop.com</span>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
