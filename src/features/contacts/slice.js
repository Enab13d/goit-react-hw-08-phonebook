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
  isDeleting: false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, {error}) => {
  state.isLoading = false;
  state.error = error.message;
  state.isDeleting = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending] (state) {
      state.isDeleting = true;
    },
    [editContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [editContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload.data);
      
    },
    [deleteContact.fulfilled](state, {payload}) {
      const index = state.items.findIndex(
        contact => contact.id === payload.data.id
      );
      state.items.splice(index, 1);
      state.isDeleting = false;
    },
    [editContact.fulfilled](state, { payload }) {
      state.items = state.items.map(item => {
        if (item.id === payload.data.id) {
          return (item = payload.data);
        }
        return item;
      });
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
