import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: '',
    token: '',
    error: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.userName = '';
      state.token = '';
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = '';
      state.token = '';
      state.error = '';
    },
    checkAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName || '';
      state.token = action.payload.token || '';
    },
  },
});

export const { loginSuccess, loginFailure, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;