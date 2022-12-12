import { createSlice } from '@reduxjs/toolkit';
import Categories from './models/Categories.model';

const initialState:Categories = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action)=> {
            state.categories = action.payload
        }
    }
});

export const { setCategories } = categoriesSlice.actions;