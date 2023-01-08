import { addToCart, getProductDetail, productUpdate } from "./cartSlice";
import axios from "axios";
// import * as dotenv from "dotenv";
import { UniquePro } from "../products/productsSlice";
import { ProductOrder } from "../misCompras/buySlice";

const { HOST } = process.env;

export const addProduct = (id: number) => {
  return async (dispatch: any) => {
    const product = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products/${id}`
    );
    dispatch(addToCart(product));
  };
};

export const getProductById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const product = (
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
      ).data;
      dispatch(getProductDetail(product));
      console.log(product);
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const updateProduct = (orderBuy: ProductOrder) => {
  return async (dispatch: any) => {
    try {
      const {
        id,
        price,
        quantity,
        product
      } = orderBuy;

      let productUpdated = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
        {
          id,
          price,
          quantity,
          product       
        }
      );
      //
      dispatch(productUpdate(productUpdated.data)); //setProduct ver si esta la funcion
    } catch (error) {
      console.log("ERROR=>", error);
    }
  };
};
