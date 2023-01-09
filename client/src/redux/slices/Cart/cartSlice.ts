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
  loadingBtnSet: boolean;
  update: number;
  priceTotalCart: number;
  quantityTotalCart: number;
}

const initialState: CartState = {
  cart: [],
  priceTotalCart: 0,
  quantityTotalCart: 0,

  loadingBtnSet: false,
  update: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCartState(state, action) {
      const priceTotalCart = action.payload.map((c:any) => c.price).reduce((a:any, d:any) => a + d, 0);
      const quantityTotalCart = action.payload
      .map((c:any) => c.quantity)
      .reduce((a:any, d:any) => a + d, 0);

      state.cart = action.payload;
      state.priceTotalCart = priceTotalCart
      state.quantityTotalCart = quantityTotalCart
    },
    setLoading(state, action) {
      state.loadingBtnSet = action.payload;
    },
    setUpdate(state) {
      state.update = state.update + 1;
    },
  },
});

export const { addProductCartState, setLoading, setUpdate } = cartSlice.actions;
