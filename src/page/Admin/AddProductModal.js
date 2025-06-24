import React from 'react';

function AddProductModal({ onClose }) {
  return (
    <div className="popup-overlay" style={{ display: 'block' }}>
      <div className="popup-container">
        <div className="popup-header">
          <h2 className="popup-title">Thêm sản phẩm</h2>
        </div>
        <div className="popup-content">
          <div className="left-section">
            <div className="section">
              <h3 className="section-title">Thông tin cơ bản của sản phẩm</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Tên sản phẩm"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Mô tả sản phẩm"
                  className="input-field textarea-field"
                ></textarea>
              </div>
            </div>
            <div className="section">
              <h3 className="section-title">Stock & Pricing</h3>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Giá bán"
                    className="input-field"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="section">
              <h3 className="section-title">Ảnh sản phẩm</h3>
              <div className="image-upload">
                <div className="upload-icon">🖼️</div>
                <div className="upload-text">Tải ảnh của sản phẩm</div>
                <div className="upload-hint">JPG, PNG, max 5MB</div>
                <input type="file" className="hidden" />
              </div>
            </div>
            <div className="section">
              <h3 className="section-title">Danh mục đồ ăn</h3>
              <div className="radio-group">
                {['Đồ Việt', 'Đồ Tây', 'Đồ Âu'].map((category) => (
                  <div key={category} className="radio-option">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      className="radio"
                    />
                    <label className="radio-label">{category}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="popup-footer">
          <div className="footer-btn">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;