import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setUser: (state, action)=> {
            state.user = action.payload
        }
    }
});

export const { setUser } = userSlice.actions;