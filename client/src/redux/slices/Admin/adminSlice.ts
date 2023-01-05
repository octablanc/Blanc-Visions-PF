import { createSlice } from '@reduxjs/toolkit';
import { UserInfo, UniquePro } from '../products';

// interface PruebaProduct {
//   name: string;
//   price: number;
// }
interface AdminState {
  products: UniquePro[];
  categories: string[];
  users: UserInfo[];
  loading: boolean;
}

const initialState: AdminState = {
  products: [],
  categories: [],
  users: [],
  loading: false,
};

export const adminSlice = createSlice({
  name: 'admin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    allProduct: (state, action) => {
      state.products = action.payload;
      //   console.log(action.payload, 'stateproductssile');
    },
    startLoadingProducts: (state, action) => {
      state.loading = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { allProduct, startLoadingProducts } = adminSlice.actions;
