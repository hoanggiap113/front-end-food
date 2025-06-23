import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const showLogin = () => setIsLogin(true);
  const showSignup = () => setIsLogin(false);

  return (
    <div className="login-container">
      <div className="logo">
        <img src="/asset/img/logo/horizontal.png" alt="Logo" />
      </div>

      <div className="signin-up">
        <div className="login-panel">
          <div className="tabs">
            <div className={`tab ${isLogin ? 'active' : ''}`} onClick={showLogin}>
              Login
            </div>
            <div className={`tab ${!isLogin ? 'active' : ''}`} onClick={showSignup}>
              Sign Up
            </div>
          </div>

          {isLogin ? (
            <div id="login-form">
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input type="email" className="form-input" placeholder="name@mail.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" placeholder="••••••••" />
              </div>
              <div className="remember-forgot">
                <a href="./forgot-password.html" className="forgot-link">Forgot password?</a>
              </div>
              <a className="login-btn" href="./index.html">Login</a>
              <p className="signup-text">
                Not a member yet?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); showSignup(); }} style={{ color: '#ff7300' }}>
                  Sign up here
                </a>
              </p>
            </div>
          ) : (
            <div id="signup-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input type="email" className="form-input" placeholder="name@mail.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-input" placeholder="••••••••" />
              </div>
              <div className="remember-forgot" style={{ marginBottom: 20 }}>
                <div className="remember-me">
                  <input type="checkbox" id="terms" className="checkbox" />
                  <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
              </div>
              <button className="signup-btn">Create Account</button>
              <p className="signup-text" style={{ marginTop: 20 }}>
                Already have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }} style={{ color: '#ff7300' }}>
                  Login here
                </a>
              </p>
            </div>
          )}

          <button className="google-btn">
            <div className="google-icon-wrapper">
              {/* SVG icon ở đây */}
              <img src="/asset/img/google-icon.svg" alt="Google" style={{ width: 24, height: 24 }} />
            </div>
            <span className="btn-text">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
