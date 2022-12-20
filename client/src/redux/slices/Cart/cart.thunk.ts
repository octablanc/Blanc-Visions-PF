import { addToCart, delItem, removeFromCart } from './cartSlice';
import axios from 'axios';


export const getProduct = (id: number) => {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(addToCart(product));
  };
}

export const deleteItem = (id: number) => {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(delItem(product));
  };
}

export const removeItem = (id: number) => {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(removeFromCart(product));
  };
}


