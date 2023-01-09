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
  loadingBtnSet : boolean
  update: number

}

const initialState: CartState = {
  cart: [],
  loadingBtnSet : false,
  update: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
<<<<<<< HEAD
    addProductCartState(state, action) {
      state.cart = action.payload;
=======
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
>>>>>>> c50ad37b9b9085d109e6ec105939dff21c9e67a2
    },
    setLoading(state, action){
      state.loadingBtnSet = action.payload
    },
    setUpdate(state){
      state.update = state.update + 1;
    },
<<<<<<< HEAD
=======

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

    productUpdate(state, action) {
      state.currentProduct.stock = state.currentProduct.stock - action.payload.stock
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getProductDetail(state, action) {
      state.currentProduct = action.payload;
    },
     
    cleanDetail(state, action){
      state.currentProduct = action.payload;
    }
>>>>>>> c50ad37b9b9085d109e6ec105939dff21c9e67a2
  },
});

export const {
<<<<<<< HEAD
  addProductCartState,
  setLoading,
  setUpdate,

=======
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  manteinQuantity,
  emptyCart,
  getDiscountTotal,
  productUpdate,
  getProductDetail,
  cleanDetail,
>>>>>>> c50ad37b9b9085d109e6ec105939dff21c9e67a2
} = cartSlice.actions;
