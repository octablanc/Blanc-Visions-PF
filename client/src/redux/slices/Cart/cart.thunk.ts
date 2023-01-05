import { addToCart, getProductDetail } from './cartSlice';
import axios from 'axios';
import * as dotenv from "dotenv";

const { HOST } = process.env;

export const addProduct = (id: number) => {
  return async (dispatch: any) => {
    const product = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`);
    dispatch(addToCart(product));
  };
}

export const getProductById = (id: number) => {
  return async (dispatch: any) => {
    try {
      const product = (await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)).data;
      dispatch(getProductDetail(product))
      console.log(product)
    } catch (error) {
      console.log('Error:', error)
    }   
  };
};

// export const updateProductStock = (product: UniquePro) => {
//   return async (dispatch: any) => {
//     try {
//       const updatedProduct = await axios.put(`http://localhost:3001/products/${id}`, product.stock)
//       dispatch()

//     } catch (error) {

//     }    
//   };
// }


