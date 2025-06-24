import React, { useState } from 'react';
import EditProductModal from './EditProductModal';
import AddProductModal from './AddProductModal';

const products = [
  { name: 'Bánh mì Việt Nam', category: 'Đồ Việt', sold: 220, price: '30.000đ', image: '/asset/img/category-food/banh mi.jpg' },
  { name: 'Buger', category: 'Đồ Tây', sold: 180, price: '40.000đ', image: '/asset/img/category-food/buger.jpg' },
  { name: 'Bún nem rán', category: 'Đồ Việt', sold: 200, price: '40.000đ', image: '/asset/img/category-food/nemran.jpg' },
  { name: 'Bún trộn', category: 'Đồ Việt', sold: 260, price: '35.000đ', image: '/asset/img/category-food/buntron.jpg' },
  { name: 'Gà rán', category: 'Đồ Tây', sold: 123, price: '40.000đ', image: '/asset/img/category-food/chickenfried.jpg' },
  { name: 'Nem rán', category: 'Đồ Việt', sold: 300, price: '40.000đ', image: '/asset/img/category-food/nemran.jpg' },
  { name: 'Phở gà', category: 'Đồ Việt', sold: 400, price: '35.000đ', image: '/asset/img/category-food/pho.jpg' },
  { name: 'Pizza', category: 'Đồ Âu', sold: 100, price: '70.000đ', image: '/asset/img/category-food/pizza.jpg' },
  { name: 'Cơm tấm', category: 'Đồ Việt', sold: 430, price: '40.000đ', image: '/asset/img/category-food/rice.jpg' },
  { name: 'Mỳ spageti', category: 'Đồ Âu', sold: 180, price: '60.000đ', image: '/asset/img/category-food/spageti.jpg' },
  { name: 'Phở cuốn', category: 'Đồ Việt', sold: 500, price: '50.000đ', image: '/asset/img/category-food/springroll.jpg' },
  { name: 'Salad ức gà', category: 'Đồ Tây', sold: 200, price: '60.000đ', image: '/asset/img/category-food/72d9af964d384fc2a16fd087c1062a7c.jpg' },
];

function ProductList() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  return (
    <div>
      <div className="content-header">
        <div className="content-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            ➕ Thêm sản phẩm
          </button>
          <button className="btn btn-secondary">X Xoá</button>
        </div>
      </div>
      <div className="table-container">
        {products.map((product, idx) => (
          <div className="product-cell" key={idx}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <div className="product-name">{product.name}</div>
              <div className="category-badge">{product.category}</div>
              <div className="stock-count">Số lượng bán: {product.sold}</div>
              <div className="price">{product.price}</div>
              <div className="action-buttons-cell">
                <button
                  className="action-btn edit-btn"
                  onClick={() => handleEdit(product)}
                >
                  ✏️
                </button>
                <button className="action-btn delete-btn">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showEditModal && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setShowEditModal(false)}
        />
      )}
      {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />}
    </div>
  );
}

export default ProductList;