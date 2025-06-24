import axios from 'axios';
import store from '../src/store/store'; 
import { logout } from './store/authSlice';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { token } = state.auth;
    console.log("Token in interceptor:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== '/login') {
      store.dispatch(logout());
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;