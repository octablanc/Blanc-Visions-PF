import {
  getProducts,
  getCategories,
  startLoadingProducts,
  createProduct,
  detailProduct,
  changePage,
} from './productsSlice';

import axios from 'axios';

export const getAllProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts());
      let products = (await axios(`http://localhost:3001/products`)).data;
      dispatch(getProducts(products));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductById = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts());
      let productsId = (await axios(`http://localhost:3001/products/${id}`))
        .data;
      dispatch(detailProduct(productsId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategories = () => {
  return async (dispatch: any) => {
    dispatch(startLoadingProducts());
    let categories = (await axios(`http://localhost:3001/categories`)).data;
    dispatch(getCategories(categories));
  };
};

export const createNewProduct = (product: any) => {
  return async (dispatch: any) => {
    let newProduct = await axios.post(
      `http://localhost:3001/products`,
      product
    );
    dispatch(createProduct(newProduct));
  };
};

export const getProductsPage = (page: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts());
      let products = (
        await axios(
          `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${2}`
        )
      ).data;
      dispatch(changePage(products));
    } catch (error) {
      console.log(error);
    }
  };
};
