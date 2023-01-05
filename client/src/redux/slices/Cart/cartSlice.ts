import { createSlice } from "@reduxjs/toolkit";
import { UniquePro } from "../products";
// // import Pro from "../products/productsSlice";

export interface CartState {
  cartItems: BoughtPro[];
  itemTotalQuantity: number;
  itemTotalAmount: number;
  cartTotalQuantity: number;
  cartTotalAmount: number;
  itemTempStock: number;
  loading: boolean;
  localStorage: CurrentStorage[];
  currentProduct: UniquePro;
}

export interface BoughtPro {
  id: number;
  cartQuantity: number;
  name: string;
  code: string;
  image: string;
  price: number;
  discount: number;
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
  itemTempStock: 0,
  loading: false,
  localStorage: [],
  currentProduct: {
    id: 0,
    name: "",
    code: "",
    description: "",
    image: "",
    price: 0,
    discount: 0,
    stock: 0,
    entrega: "",
    id_category: 0,
    state: true,
    category: "",
    properties: [],
    images: [],
    loading: false,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      let cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0 && state.cartItems[itemIndex].stock > 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartItems[itemIndex].stock -= 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        if (!cartItem && tempProduct.stock > 0) {
          tempProduct.stock -= 1;
          state.cartItems.push(tempProduct);
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));      
    },

    removeFromCart(state, action) {
      const itemRemoved = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = itemRemoved;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemTotalQuantity = state.cartItems[itemIndex].cartQuantity -= 1;
      state.cartItems[itemIndex].stock += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemTotalQuantity = state.cartItems[itemIndex].cartQuantity += 1;
      state.cartItems[itemIndex].stock -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    manteinQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemTotalQuantity = state.cartItems[itemIndex].cartQuantity;
      state.cartItems[itemIndex].stock = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    emptyCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          // console.log(itemTotal);
          cartTotal.total += itemTotal;
          // console.log(cartTotal.total);
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    getDiscountTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, discount, cartQuantity } = cartItem;
          const itemTotal = price * (1 - discount / 100) * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    purchase(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getProductDetail(state, action) {
      state.currentProduct = action.payload;
    },
     
    cleanDetail(state, action){
      state.currentProduct = action.payload;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  manteinQuantity,
  emptyCart,
  getDiscountTotal,
  getProductDetail,
  cleanDetail,
} = cartSlice.actions;
