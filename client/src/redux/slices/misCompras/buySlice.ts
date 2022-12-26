import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  image: string;
  name: string;
}
export interface ProductOrder {
  price: number;
  quantity: number;
  product: Array<Product>;
}

export interface BuyState {
  buy: boolean;
  id: number;
  priceTotalDiscount: number;
  productOrder: Array<ProductOrder>;
}
export interface NewBuyState{
  myBuys: BuyState[]
}

const initialState: NewBuyState = {
  myBuys: [],
};

export const buySlice = createSlice({
  name: "buys",
  initialState,
  reducers: {
    allBuy: (state, action) => {
      state.myBuys = action.payload;
    },
  },
});

export const { allBuy } = buySlice.actions;
