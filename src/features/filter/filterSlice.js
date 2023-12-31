import { createSlice } from '@reduxjs/toolkit';
const initialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

//selectors

export const getFilterValue = state => state.filter.value;
