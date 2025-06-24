import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: '',
    error: '',
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.userName = '';
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = '';
      state.error = '';
    },
    checkAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName || '';
    },
  },
});

export const { loginSuccess, loginFailure, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;