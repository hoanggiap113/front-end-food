import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout, checkAuth } from '../../store/authSlice';

function Navbar() {
  const { isLoggedIn, userName, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = React.useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      console.log("Checking auth status with Redux state:", { isLoggedIn, userName, token });
      if (token && userName) {
        // Sử dụng dữ liệu từ Redux store, không gọi API
        dispatch(checkAuth({ isLoggedIn: true, userName, token }));
      } else {
        dispatch(logout());
        navigate("/login");
      }
    };
    checkAuthStatus();
  }, [dispatch, token, userName, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navRight}>
        {isLoggedIn ? (
          <div className={styles.userSection}>
            <span className={styles.userName} onClick={() => setShowDropdown(!showDropdown)}>
              {userName} <i className="fas fa-caret-down"></i>
            </span>
            {showDropdown && (
              <div className={styles.dropdown}>
                <Link to="/order-list" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>Order List</Link>
                <Link to="/profile" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>Profile</Link>
                <button className={styles.dropdownItem} onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className={styles.navItem}>Login/Signup</Link>
        )}
        <Link to="/cart" className={styles.navItem}>
          <i className={`${styles.icon} fas fa-shopping-cart`}></i>
          <span className={styles.cartCount}>0</span>
        </Link>
        <div className={styles.menuIcon}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;