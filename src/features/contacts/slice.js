import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from '../contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => (state.isLoading = true);
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [editContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload.data;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push({ payload });
      state.isLoading = false;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items.filter(item => item.id !== payload.id);
      state.isLoading = false;
    },
    [editContact.fulfilled](state, { payload }) {
      state.items.map(item => {
        if (item.id === payload.id) {
          return (item = payload);
        }
        return item;
      });
    },
  },
});

export default contactsSlice.reducer;
