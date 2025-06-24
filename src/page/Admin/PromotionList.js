import React from 'react';

const promotions = [
  { customer: 'Trần Minh Anh', discount: '10%' },
  { customer: 'Nguyễn Văn Bình', discount: '15%' },
  { customer: 'Lê Thị Hương', discount: '20%' },
  { customer: 'Phạm Đức Cường', discount: '5%' },
  { customer: 'Hoàng Thị Lan', discount: '25%' },
];

function PromotionList() {
  return (
    <div>
      <div className="content-header">
        <div className="content-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="action-buttons">
          <button className="btn btn-primary">➕ Thêm khuyến mại</button>
          <button className="btn btn-secondary">X Xoá</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sản phẩm khuyến mại</th>
              <th>Phần trăm khuyến mại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, index) => (
              <tr key={index}>
                <td>{promotion.customer}</td>
                <td>{promotion.discount}</td>
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

export default PromotionList;