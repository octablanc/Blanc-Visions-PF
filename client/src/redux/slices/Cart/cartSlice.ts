import { createSlice } from '@reduxjs/toolkit';

interface ProductCartIfc {
  name: string;
  id: number;
  price: number;
  stock: number;
  image: string;
  discount: number;
}

export interface BoughtPro {
  id: number;
  quantity: number;
  price: number;
  productId: number;
  product: ProductCartIfc;
}
export interface CartState {
  cart: Array<BoughtPro>;
  loadingBtnSet : boolean
  update: number

}

const initialState: CartState = {
  cart: [],
  loadingBtnSet : false,
  update: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCartState(state, action) {
      state.cart = action.payload;
    },
    setLoading(state, action){
      state.loadingBtnSet = action.payload
    },
    setUpdate(state){
      state.update = state.update + 1;
    },
  },
});

export const {
  addProductCartState,
  setLoading,
  setUpdate,

} = cartSlice.actions;
