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
  createdAt: string;
  buy: boolean;
  id: number;
  priceTotalDiscount: number;
  productOrders: Array<ProductOrder>;
}
export interface NewBuyState{
  myBuys: Array<BuyState>
  // myBuys: BuyState[]

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
