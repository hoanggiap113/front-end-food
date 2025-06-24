import React from 'react';

const categories = [
  { name: 'Đồ Việt', count: 7 },
  { name: 'Đồ Tây', count: 3 },
  { name: 'Đồ Âu', count: 2 },
];

function CategoryList() {
  return (
    <div>
      <div className="content-header">
        <div className="content-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="action-buttons">
          <button className="btn btn-primary">➕ Thêm danh mục</button>
          <button className="btn btn-secondary">X Xoá</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Tên danh mục</th>
              <th>Số lượng sản phẩm</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>{category.count}</td>
                <td className="action-buttons-cell">
                  <button className="action-btn edit-btn">✏️</button>
                  <button className="action-btn delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryList;