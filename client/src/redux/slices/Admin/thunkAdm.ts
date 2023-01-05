import axios from 'axios';
import { allProduct, startLoadingProducts } from './adminSlice';

export const getProductByState = (value: boolean) => {
  // console.log('ProductsState=> ', value);

  return async (dispatch: any) => {
    dispatch(startLoadingProducts(true));
    const productState = (
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products?state=${value}`
      )
    ).data;
    // console.log(productState);
    dispatch(allProduct(productState));
    dispatch(startLoadingProducts(false));
  };
};
