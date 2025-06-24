import React from 'react';

const menuItems = [
  { icon: '📊', label: 'Thống kê', key: 'Thống kê' },
  { icon: '📦', label: 'Sản phẩm', key: 'Sản phẩm', active: true },
  { icon: '👥', label: 'Khách hàng', key: 'Khách hàng' },
  { icon: '🏷️', label: 'Danh mục', key: 'Danh mục' },
  { icon: '📋', label: 'Đơn hàng', key: 'Đơn hàng' },
  { icon: '🎫', label: 'Khuyến mại', key: 'Khuyến mại' },
  { icon: '💬', label: 'Liên hệ', key: 'Liên hệ', count: 4 },
];

function Sidebar({ setActiveTab }) {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <div className="menu-section">
        <div className="menu-title">Menu</div>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.key} className="nav-item">
              <div
                className={`nav-link ${item.active ? 'active' : ''}`}
                onClick={() => setActiveTab(item.key)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.count && <span className="badge">{item.count}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-section">
        <div className="menu-title">Other</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <div className="nav-link">
              <span className="nav-icon">🚪</span>
              <span>Đăng xuất</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;