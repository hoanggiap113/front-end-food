// LoginPage.js - React version of modern login page
import React, { useState } from "react";
import styles from "./login.module.css";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/authSlice';
import axiosInstance from '../../axiosConfig';
import { useNavigate } from 'react-router-dom'; // Thêm useNavigate
const cx = classNames.bind(styles);

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate(); // Khai báo useNavigate

  const showLogin = () => setIsLogin(true);
  const showSignup = () => setIsLogin(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: email,
        password: password,
      });
      const { data } = response;
      console.log("Response from /auth/login:", data); // Log toàn bộ response
      console.log("Received token:", data.data.token); // Log token trước khi dispatch
      const { token, email: userEmail, role } = data.data;
      dispatch(loginSuccess({ userName: userEmail, token }));
      navigate("/"); // Sử dụng navigate thay vì window.location.href
    } catch (err) {
      dispatch(loginFailure("Invalid email or password"));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/register", {
        email: email,
        password: password,
        name: userName,
      });
      const { data } = response;
      console.log("Response from /auth/register:", data);
      console.log("Received token:", data.data.token);
      const { token, email: userEmail, role } = data.data;
      dispatch(loginSuccess({ userName: userEmail, token }));
      navigate("/"); // Sử dụng navigate
    } catch (err) {
      dispatch(loginFailure("Signup failed"));
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("login-container")}>
        <div className={cx("logo")}>
          <img src="../../assets/img/logo/horizontal.png" alt="Logo" />
        </div>
        <div className={cx("signin-up")}>
          <div className={cx("login-panel")}>
            <div className={cx("tabs")}>
              <div
                className={cx("tab", { active: isLogin })}
                onClick={showLogin}
              >
                Login
              </div>
              <div
                className={cx("tab", { active: !isLogin })}
                onClick={showSignup}
              >
                Sign Up
              </div>
            </div>

            {isLogin ? (
              <div id="login-form">
                {error && <p className={cx("error")}>{error}</p>}
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Email address</label>
                  <input
                    type="email"
                    className={cx("form-input")}
                    placeholder="name@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Password</label>
                  <input
                    type="password"
                    className={cx("form-input")}
                    placeholder="••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={cx("remember-forgot")}>
                  <a href="#" className={cx("forgot-link")}>
                    Forgot Password?
                  </a>
                </div>
                <button className={cx("login-btn")} onClick={handleLogin}>
                  Login
                </button>
                <p className={cx("signup-text")}>
                  Not a member yet?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      showSignup();
                    }}
                    style={{ color: "#ff7300", textDecoration: "none" }}
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            ) : (
              <div id="signup-form">
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Full Name</label>
                  <input
                    type="text"
                    className={cx("form-input")}
                    placeholder="John Doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Email address</label>
                  <input
                    type="email"
                    className={cx("form-input")}
                    placeholder="name@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Password</label>
                  <input
                    type="password"
                    className={cx("form-input")}
                    placeholder="••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={cx("form-group")}>
                  <label className={cx("form-label")}>Confirm Password</label>
                  <input
                    type="password"
                    className={cx("form-input")}
                    placeholder="••••••••••••••"
                  />
                </div>
                <div
                  className={cx("remember-forgot")}
                  style={{ marginBottom: 20 }}
                >
                  <div className={cx("remember-me")}>
                    <input
                      type="checkbox"
                      id="terms"
                      className={cx("checkbox")}
                    />
                    <label htmlFor="terms">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                </div>
                <button className={cx("signup-btn")} onClick={handleSignup}>
                  Create Account
                </button>
                <p className={cx("signup-text")} style={{ marginTop: 20 }}>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      showLogin();
                    }}
                    style={{ color: "#ff7300", textDecoration: "none" }}
                  >
                    Login here
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <button className={cx("google-btn")} onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>
          <div className={cx("google-icon-wrapper")}>
            {/* SVG GOOGLE ICON */}
          </div>
          <span className={cx("btn-text")}>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;