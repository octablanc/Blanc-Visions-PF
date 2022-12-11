import { setProducts, startLoadingProducts } from './productsSlice';
import axios from 'axios';

export const getProducts = () => {
  return async (dispatch: any) => {
    dispatch(startLoadingProducts());
    let products = (await axios(`http://localhost:3001/products`)).data;

    dispatch(setProducts(products));
  };
};
