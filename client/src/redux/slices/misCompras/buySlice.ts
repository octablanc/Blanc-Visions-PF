import { createSlice } from '@reduxjs/toolkit';


export interface Product {
  id: number;
  image: string;
  name: string;
  ratings: Array<{userId:number}>

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
  rating: {
    score: number
    commentary: string
    
  }
}

const initialState: NewBuyState = {
  myBuys: [],
  rating: {
    score: 1,
    commentary: ''
  }
};

export const buySlice = createSlice({
  name: 'buys',
  initialState,
  reducers: {
    allBuy: (state, action) => {
      state.myBuys = action.payload;
    },
    setRating: (state, action) => {
      state.rating.commentary = action.payload.commentary;
      state.rating.score = action.payload.score;
    },
  },
});

export const { allBuy } = buySlice.actions;
