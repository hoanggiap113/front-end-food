// components/OrderListPage.js

import React, { useState } from "react";
import styles from "./OrderList.module.css"; // Sử dụng styles từ CSS Module
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const orders = [
  {
    id: "001",
    product: "Bánh mỳ",
    total: "35.000 VND",
    date: "15/06/2025",
    status: "processing",
    action: "Chi tiết",
  },
  {
    id: "002",
    product: "Bánh mỳ",
    total: "35.000 VND",
    date: "15/06/2025",
    status: "completed",
    action: "Đánh giá",
  },
  {
    id: "003",
    product: "Phở gà",
    total: "40.000 VND",
    date: "13/06/2025",
    status: "unpaid",
    action: "Thanh toán",
  },
  {
    id: "004",
    product: "Phở gà",
    total: "40.000 VND",
    date: "13/06/2025",
    status: "processing",
    action: "Theo dõi",
  },
  {
    id: "005",
    product: "Gà rán",
    total: "40.000 VND",
    date: "11/06/2025",
    status: "unpaid",
    action: "Thanh toán",
  },
  {
    id: "006",
    product: "Gà rán",
    total: "40.000 VND",
    date: "11/06/2025",
    status: "completed",
    action: "Mua lại",
  },
  {
    id: "007",
    product: "Gà rán",
    total: "40.000 VND",
    date: "11/06/2025",
    status: "processing",
    action: "Chi tiết",
  },
];

function OrderList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Trang chủ");

  const filteredOrders = orders.filter(
    (o) =>
      o.id.includes(searchTerm) ||
      o.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusClass = (status) => {
    switch (status) {
      case "processing":
        return "status-processing";
      case "completed":
        return "status-completed";
      case "unpaid":
        return "status-unpaid";
      default:
        return "status-pending";
    }
  };

  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.logo}>SHOP LOGO</div>
            <div className={styles["nav-menu"]}>
              {[
                "Trang chủ",
                "Menu",
                "Giới thiệu",
                "Liên hệ",
                "Đăng nhập",
                "🛒",
              ].map((label) => (
                <button
                  key={label}
                  className={`${styles["nav-btn"]} ${
                    activeTab === label ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles["search-box"]}>
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm đơn hàng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles["search-btn"]}>Tìm kiếm</button>
          </div>
        </div>

        <div className={styles["order-section"]}>
          <h2 className={styles["section-title"]}>Danh sách đơn hàng</h2>

          {filteredOrders.map((order) => (
            <div className={styles["order-item"]} key={order.id}>
              <div className={styles["order-info"]}>
                <div className={styles["order-title"]}>
                  Đơn hàng #{order.id}
                </div>
                <div className={styles["order-details"]}>
                  Sản phẩm: {order.product}
                  <br />
                  Tổng tiền: {order.total} | Ngày đặt: {order.date}
                </div>
              </div>
              <div className={styles["order-status"]}>
                <span className={cx("status-btn", statusClass(order.status))}>
                  {order.status === "completed"
                    ? "Hoàn thành"
                    : order.status === "unpaid"
                    ? "Chưa thanh toán"
                    : "Đang xử lý"}
                </span>

                <button
                  className={cx(
                    order.action === "Thanh toán" ? "payment-btn" : "action-btn"
                  )}
                >
                  {order.action}
                </button>

                {order.status === "unpaid" && (
                  <button className={cx("action-btn")}>Hủy đơn</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default OrderList;
