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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, { payload: { data } }) {
      state.user = data.user;
      state.token = data.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload: { data } }) {
      state.user = data.user;
      state.token = data.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      },
      [refreshUser.pending](state) {
          state.isRefreshing = true;
      },
      [refreshUser.fulfilled] (state, {payload}){
          state.isRefreshing = false;
          state.isLoggedIn = true;
          state.user = payload;
      },
      [refreshUser.rejected] (state) {
        state.isRefreshing = false;
      }
  },
});

export default authSlice.reducer;