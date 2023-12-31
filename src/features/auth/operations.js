import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const clearHeader = token => (axios.defaults.headers.common.Authorization = '');

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setHeader(response.data.token);
    return response;
  } catch (error) {
    clearHeader();
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
        setHeader(response.data.token);
        return response;
    } catch (error) {
      clearHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (!token) {
            return thunkAPI.rejectWithValue('An error has occured because token is invalid or not present')
        }
        try {
            setHeader(token);
            const response = await axios.get('/users/current');
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)