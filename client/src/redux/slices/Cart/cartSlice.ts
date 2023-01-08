import { createSlice } from '@reduxjs/toolkit';
import { UniquePro } from '../products';

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
  // userId: number;
  product: ProductCartIfc;
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
    addProductCartState(state, action) {
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
  addProductCartState,
  // removeFromCart,
  // decreaseQuantity,
  // increaseQuantity,
  // emptyCart,
  // getDiscountTotal,
  getProductDetail,
  cleanDetail,
} = cartSlice.actions;
