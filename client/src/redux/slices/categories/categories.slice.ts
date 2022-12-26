import { createSlice } from '@reduxjs/toolkit';
import Categories from './models/Categories.model';

const initialState: Categories = {
  categories: [],
  currentCategory: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { getCategories, setCategory } = categoriesSlice.actions;
