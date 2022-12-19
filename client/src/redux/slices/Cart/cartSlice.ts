import { createSlice } from "@reduxjs/toolkit";
// import Pro from "../products/productsSlice";

export interface CartState {
  cartItems: BoughtPro[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  loading: boolean;
}

export interface BoughtPro {
  id: number;
  cartQuantity: number;
  name: string;
  code: string;
  image: string;
  price: number;
  stock: number;
  state: Boolean;
  loading: boolean;
}
const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  loading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ); //
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems = tempProduct;
      }
    },

    delItem(state, action) {
      const findItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ); //retorna el index del match

      if (findItem >= 0) {
        state.cartItems[findItem].cartQuantity > 1
          ? (state.cartItems[findItem].cartQuantity -= 1)
          : state.cartItems.splice(findItem, 1);
      }
    },

    remItem(state, action) {
      const itemRemove = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = itemRemove;
    },
  },
});

export const { addToCart, delItem, remItem } = cartSlice.actions;
