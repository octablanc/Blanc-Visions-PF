import { setProducts, startLoadingProducts } from './productsSlice';
import axios from 'axios';

export const getProducts = () => {
  return async (dispatch: any) => {
    dispatch(startLoadingProducts());
    let products = (await axios(`http://localhost:4000/products`)).data;
    dispatch(setProducts(products));
  };
};
