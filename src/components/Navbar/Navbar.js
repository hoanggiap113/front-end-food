import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo/logo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('John Doe');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check localStorage for login state on mount
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || 'John Doe';
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    localStorage.removeItem('userName'); // Clear user name
    setIsLoggedIn(false);
    setShowDropdown(false); // Hide dropdown
    // Add logout logic (e.g., API call) here if needed
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