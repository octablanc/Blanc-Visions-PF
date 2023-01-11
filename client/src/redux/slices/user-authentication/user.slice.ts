import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/User.model';

interface InitialState {
    user: User | null;
    loading: Boolean;
    // localUser: User | null;
}

const initialState: InitialState = {
    user: null,
    loading: true,
    //agrego user al localStorage
    // localUser: localStorage.getItem('localUser') 
    // ? JSON.parse(`${localStorage.getItem('localUser')}`)
    // : null,    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=> {
            state.loading = false;
            state.user = action.payload;
            //agrego el user al localStorage
            // localStorage.setItem('localUser', JSON.stringify(state.user))
        },
        setLoading: (state, action) =>{
            state.loading = action.payload;
        }    
    }
});

export const { setUser, setLoading } = userSlice.actions;