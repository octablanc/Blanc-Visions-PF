import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=> {
            state.loading = false;
            state.user = action.payload
        },
        setLoading: (state, action) =>{
            state.loading = action.payload;
        }
    }
});

export const { setUser, setLoading } = userSlice.actions;