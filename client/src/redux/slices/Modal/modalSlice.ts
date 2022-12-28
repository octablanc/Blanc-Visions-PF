import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: true,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = true;
        },

        closeModal: (state, action) => {
            state.open = false;        }


    }
});

export const {openModal, closeModal} = modalSlice.actions