import React, { useState, useEffect, useReducer } from "react";
import axiosInstance from "../../axiosConfig";
import styles from "./ProductDetail.module.css";

// Reducer function to manage quantity and total price
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      if (state.quantity < action.maxQuantity) {
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: (state.quantity + 1) * action.unitPrice,
        };
      }
      return state;
    case "DECREASE_QUANTITY":
      if (state.quantity > 1) {
        return {
          ...state,
          quantity: state.quantity - 1,
          totalPrice: (state.quantity - 1) * action.unitPrice,
        };
      }
      return state;
    case "SET_INITIAL_PRICE":
      return {
        ...state,
        totalPrice: state.quantity * action.unitPrice,
      };
    default:
      return state;
  }
};

function ProductDetail({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize useReducer with initial state
  const [cartState, dispatch] = useReducer(cartReducer, {
    quantity: 1,
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/${productId}`);
        setProduct(response.data);
        // Initialize total price when product is loaded
        dispatch({
          type: "SET_INITIAL_PRICE",
          unitPrice: response.data.price,
        });
        setLoading(false);
      } catch (err) {
        setError("Không thể tải thông tin sản phẩm");
        setLoading(false);
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [productId]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleQuantityChange = (action) => {
    if (action === "decrease") {
      dispatch({
        type: "DECREASE_QUANTITY",
        unitPrice: product.price,
        maxQuantity: product.quantity,
      });
    } else if (action === "increase") {
      dispatch({
        type: "INCREASE_QUANTITY",
        unitPrice: product.price,
        maxQuantity: product.quantity,
      });
    }
  };

  if (loading) return <div className={styles.loading}>Đang tải...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!product)
    return <div className={styles.error}>Sản phẩm không tìm thấy</div>;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.flex}>
          <div className={styles.productImage}>
            <img src={product.image_url} alt={product.name} />
          </div>
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <div className={styles.productDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Giá đơn vị</span>
                <span className={styles.detailValue}>
                  {product.price.toLocaleString("vi-VN")}đ
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Tổng giá</span>
                <span className={styles.detailValue}>
                  {cartState.totalPrice.toLocaleString("vi-VN")}đ
                </span>
              </div>
              <div className={styles["detailItem-description"]}>
                <span className={styles.detailLabel}>Mô tả</span>
                <span className={styles.detailValue}>
                  {product.description}
                </span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Số lượng</span>
                <div className={styles.quantitySelector}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    -
                  </button>
                  <span className={styles.quantityValue}>
                    {cartState.quantity}
                  </span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Voucher</span>
                <select className={styles.voucherSelect}>
                  <option>Chọn voucher</option>
                  <option>Giảm 10%</option>
                  <option>Giảm 20%</option>
                  <option>Freeship</option>
                </select>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.addToCart}>Thêm vào giỏ</button>
              <button className={styles.buyNow}>Mua ngay</button>
            </div>
          </div>
          <div className={styles.closeButton} onClick={onClose}>
            ×
          </div>
        </div>
        <div className={styles.reviewsSection}>
          <h2 className={styles.reviewsTitle}>Đánh giá sản phẩm</h2>
          <div className={styles.reviewsList}>
            {Array(10)
              .fill()
              .map((_, index) => (
                <div key={index} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewUsername}>
                      Username{index + 1}
                    </span>
                    <div className={styles.reviewRating}>
                      {renderStars(5)}
                    </div>
                  </div>
                  <p className={styles.reviewComment}>
                    Đánh giá mẫu {index + 1}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;