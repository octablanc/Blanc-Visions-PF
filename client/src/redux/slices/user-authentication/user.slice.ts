import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/User.model';

interface InitialState {
    user: User | null;
    loading: Boolean;
}

const initialState: InitialState = {
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