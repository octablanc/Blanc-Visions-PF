import { createSlice } from '@reduxjs/toolkit';
import { UniquePro } from '../products';

export interface BoughtPro {
  // id: number;
  quantity: number;
  price: number;
  productId: number;
  userId: number;
}
export interface CartState {
  cart: Array<BoughtPro>;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart(state, action) {
      console.log("REDUCER=>",action.payload)
      state.cart = action.payload;
    },
    removeProductCart(state, action) {},
    decreaseQuantity(state, action) {},
    increaseQuantity(state, action) {},
    emptyCart(state, action) {},
    getTotal(state, action) {
      // Total de productos en el carrito
    },

    // * -  - - - -
    // getDiscountTotal(state, action) {
    //   // calculo la precio con descuento total
    //   // calculo la cantidad total  (ESTA CAPAZ NO )
    // },
    getProductDetail(state, action) {
      // state.currentProduct = action.payload;
    },

    cleanDetail(state, action) {
      // state.currentProduct = action.payload;
    },
  },
});

export const {
  // addToCart,
  // removeFromCart,
  // decreaseQuantity,
  // increaseQuantity,
  // emptyCart,
  // getDiscountTotal,
  getProductDetail,
  cleanDetail,
} = cartSlice.actions;
