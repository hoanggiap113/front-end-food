import React from 'react';

const orders = [
  { customer: 'Trần Minh Anh', payment: 'Đã thanh toán', status: 'Đang giao' },
  { customer: 'Nguyễn Văn Bình', payment: 'Chưa thanh toán', status: 'Đang giao' },
  { customer: 'Lê Thị Hương', payment: 'Đã thanh toán', status: 'Đã giao' },
  { customer: 'Phạm Đức Cường', payment: 'Đã thanh toán', status: 'Đã giao' },
  { customer: 'Hoàng Thị Lan', payment: 'Chưa thanh toán', status: 'Đang giao' },
];

function OrderList() {
  return (
    <div>
      <div className="content-header">
        <div className="content-search">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="action-buttons">
          <button className="btn btn-secondary">X Xoá</button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Khách hàng</th>
              <th>Trạng thái thanh toán</th>
              <th>Trạng thái đơn hàng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.customer}</td>
                <td>{order.payment}</td>
                <td>{order.status}</td>
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

export default OrderList;