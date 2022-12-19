import { createSlice } from "@reduxjs/toolkit";
// // import Pro from "../products/productsSlice";

export interface CartState {
  cartItems: BoughtPro[];
  itemTotalQuantity: number;
  itemTotalAmount: number;
  cartTotalQuantity: number;
  cartTotalAmount: number;
  loading: boolean;
  localStorage: CurrentStorage[];
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
interface CurrentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(`${localStorage.getItem("cartItems")}`)
    : [],
  itemTotalQuantity: 0,
  itemTotalAmount: 0,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  loading: false,
  localStorage: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartTotalQuantity += 1;
      state.itemTotalAmount = action.payload.price;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, delItem, remItem } = cartSlice.actions;
