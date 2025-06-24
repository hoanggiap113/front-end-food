import React, { useState } from 'react';
import ProductList from './ProductList';
import CustomerList from './CustomerList';
import CategoryList from './CategoryList';
import OrderList from './OrderList';
import PromotionList from './PromotionList';
import './Admin.css';
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Sản phẩm');

  const renderContent = () => {
    switch (activeTab) {
      case 'Sản phẩm':
        return <ProductList />;
      case 'Khách hàng':
        return <CustomerList />;
      case 'Danh mục':
        return <CategoryList />;
      case 'Đơn hàng':
        return <OrderList />;
      case 'Khuyến mại':
        return <PromotionList />;
      default:
        return <ProductList />;
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="content-header">
          {['Sản phẩm', 'Khách hàng', 'Danh mục', 'Đơn hàng', 'Khuyến mại'].map((tab) => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="content-area active">
          <div className="breadcrumb">Thống kê / {activeTab}</div>
          <h1 className="page-title">{activeTab}</h1>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;