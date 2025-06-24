// LoginPage.js - React version of modern login page
import React, { useState } from 'react';
import './login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const showLogin = () => setIsLogin(true);
  const showSignup = () => setIsLogin(false);

  return (
    <div className="login-container">
      <div className="logo">
        <img src="./asset/img/logo/horizontal.png" alt="Logo" />
      </div>
      <div className="signin-up">
        <div className="login-panel">
          <div className="tabs">
            <div
              className={`tab ${isLogin ? 'active' : ''}`}
              onClick={showLogin}
            >
              Login
            </div>
            <div
              className={`tab ${!isLogin ? 'active' : ''}`}
              onClick={showSignup}
            >
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
                <input type="password" className="form-input" placeholder="••••••••••••••" />
              </div>
              <div className="remember-forgot">
                <a href="./forgot-password.html" className="forgot-link">Forgot password?</a>
              </div>
              <a className="login-btn" href="./index.html">Login</a>
              <p className="signup-text">
                Not a member yet?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); showSignup(); }} style={{ color: '#ff7300', textDecoration: 'none' }}>
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
                <input type="password" className="form-input" placeholder="••••••••••••••" />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-input" placeholder="••••••••••••••" />
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
                <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }} style={{ color: '#ff7300', textDecoration: 'none' }}>
                  Login here
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
      <button className="google-btn">
        <div className="google-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
        </div>
        <span className="btn-text">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
