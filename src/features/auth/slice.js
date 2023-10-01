import { logIn, signUp, logOut, refreshUser } from '../auth/operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.rejected]: handleRejected,
    [logIn.rejected]: handleRejected,
    [logOut.rejected]: handleRejected,
    [signUp.fulfilled](state, { payload: { data } }) {
      state.user = data.user;
      state.token = data.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.fulfilled](state, { payload: { data } }) {
      state.user = data.user;
      state.token = data.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user = payload;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
