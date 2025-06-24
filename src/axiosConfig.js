import axios from 'axios';
import store from '../src/store/store'; 

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

export default axiosInstance;