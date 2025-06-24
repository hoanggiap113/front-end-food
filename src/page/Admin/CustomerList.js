import React from 'react';

const customers = [
  { name: 'Trần Minh Anh', phone: '0983 451 289', address: 'Hàng Trống, Hoàn Kiếm, Hà Nội' },
  { name: 'Nguyễn Văn Bình', phone: '0912 345 678', address: '58 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội' },
  { name: 'Lê Thị Hương', phone: '0378 956 123', address: '1 Tràng Tiền, Hoàn Kiếm, Hà Nội' },
  { name: 'Phạm Đức Cường', phone: '0856 789 012', address: 'Đồng Xuân, Hoàn Kiếm, Hà Nội' },
  { name: 'Hoàng Thị Lan', phone: '0904 567 890', address: '458 Minh Khai, Vĩnh Tuy, Hai Bà Trưng, Hà Nội' },
];

function CustomerList() {
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
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ giao hàng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
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

export default CustomerList;