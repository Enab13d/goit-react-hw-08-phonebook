import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {
    name: null,
    email: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (
      state,
      {
        payload: {
          data: { user, token },
        },
      }
    ) => {
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.isLoggedIn = true;
      state.token = token;
    },
    resetCredentials: state => {
        state.user = {
            name: null,
            email: null,
            isLoggedIn: false,
            isRefreshing: false,
        };
        state.token = null;
    },
  },
});

export const { setCredentials, resetCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = state => state.auth.user;
export const selectCurrentUserStatus = state => state.auth.user.isLoggedIn;
