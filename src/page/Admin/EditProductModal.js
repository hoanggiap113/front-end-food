import React from 'react';

function EditProductModal({ product, onClose }) {
  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Chỉnh sửa sản phẩm</h2>
        <div className="form-group">
          <label>Chọn ảnh mới</label>
          <div className="image-upload-container">
            <img
              src={product?.image || 'https://via.placeholder.com/150'}
              alt="Preview"
              className="image-preview"
            />
            <input type="file" className="upload-btn" />
          </div>
        </div>
        <div className="form-group">
          <label>Tên món ăn</label>
          <input
            type="text"
            defaultValue={product?.name}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Danh mục</label>
          <select defaultValue={product?.category} className="input-field">
            <option>Đồ Việt</option>
            <option>Đồ Tây</option>
            <option>Đồ Âu</option>
          </select>
        </div>
        <div className="form-group">
          <label>Giá bán (đồng)</label>
          <input
            type="text"
            defaultValue={product?.price}
            className="input-field"
          />
        </div>
        <div className="form-actions">
          <button className="btn btn-cancel" onClick={onClose}>
            Hủy
          </button>
          <button className="btn btn-save">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;