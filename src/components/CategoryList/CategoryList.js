import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../../axiosConfig'; // Điều chỉnh đường dẫn nếu cần
import styles from './CategoryList.module.css';
import ProductDetail from '../ProductDetail/ProductDetail'; // Điều chỉnh đường dẫn nếu cần

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/');
        console.log('API response:', response.data); // Kiểm tra dữ liệu trả về
        const formattedCategories = response.data.map((product) => ({
          id: product.id,
          name: product.name,
          price: `${product.price.toLocaleString('vi-VN')}đ`, // Sửa 'd' thành 'đ' cho đúng ký hiệu tiền tệ
          image: product.image_url || 'https://via.placeholder.com/150' // Sử dụng ảnh placeholder nếu image_url không tồn tại
        }));
        setCategories(formattedCategories);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải danh mục món ăn');
        setLoading(false);
        console.error('Error fetching products:', err);
        if (err.response?.status === 401) {
          console.log('Endpoint yêu cầu đăng nhập');
        }
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <div className={styles.loading}>Đang tải...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  const handleShowAllClick = () => {
    setShowAll(!showAll);
    setTimeout(() => {
      if (!showAll && carouselRef.current) {
        const nextCards = carouselRef.current.querySelectorAll('.restaurantCard:nth-child(n+5)');
        if (nextCards.length > 0) {
          nextCards[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else if (carouselRef.current) {
        carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  const handleProductClick = (id) => {
    setSelectedProductId(id);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <h2>Các món ăn</h2>
        <button
          className={styles.showAll}
          onClick={handleShowAllClick}
          style={{ display: categories.length > 4 ? 'block' : 'none' }}
        >
          {showAll ? 'Ẩn bớt' : 'Show all'}
        </button>
      </div>
      <div className={styles.restaurantCarousel}>
        <div className={styles.carouselContainer} ref={carouselRef}>
          {categories.map((item) => (
            <div
              className={`${styles.restaurantCard} ${
                !showAll && categories.indexOf(item) >= 4 ? styles.hidden : ''
              }`}
              key={item.id}
              onClick={() => handleProductClick(item.id)}
            >
              <div className={styles.restaurantImage}>
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150'; // Ảnh thay thế nếu không tải được
                  }}
                />
                <div className={styles.foodDetail}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className={styles.restaurantLogo}>
                <button className={styles.addToCart}>Thêm giỏ hàng</button>
                <button className={styles.buyNow}>Mua ngay</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProductId && (
        <ProductDetail productId={selectedProductId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default CategoryList;