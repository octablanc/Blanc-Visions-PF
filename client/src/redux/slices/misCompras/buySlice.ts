import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}
export interface ProductOrder {
  id: number;
  price: number;
  quantity: number;
  product: Product;
}

export interface BuyState {
  createdAt: string;
  buy: boolean;
  id: number;
  priceTotalDiscount: number;
  productOrders: Array<ProductOrder>;
  street: string;
  height: string;
  city: string;
}

export interface NewBuyState {
  myBuys: Array<BuyState>;
}

const initialState: NewBuyState = {
  myBuys: [],
};

export const buySlice = createSlice({
  name: 'buys',
  initialState,
  reducers: {
    allBuy: (state, action) => {
      state.myBuys = action.payload;
    },
  },
});

export const { allBuy } = buySlice.actions;
