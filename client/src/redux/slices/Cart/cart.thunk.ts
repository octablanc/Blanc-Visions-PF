import { addToCart, delItem, remItem } from './cartSlice';
import axios from 'axios';

export function getProduct(id: number) {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(addToCart(product));
  };
}

export function deleteItem(id: number) {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(delItem(product));
  };
}

export function removeItem(id: number) {
  return async (dispatch: any) => {
    const product = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(remItem(product));
  };
}
