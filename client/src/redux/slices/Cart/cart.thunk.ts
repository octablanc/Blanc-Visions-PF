import { addProductCartState, setLoading, setUpdate } from './cartSlice';
import axios from 'axios';
import * as dotenv from 'dotenv';

const { HOST } = process.env;
interface Props {
  productId: number;
  quantity: number;
  price: number;
  userId: number;
}
interface PropsSetCart{
  id: number;
  quantity: number;
}

export const addProductCart = ({
  productId,
  quantity,
  price,
  userId,
}: Props) => {
  return async (dispatch: any) => {
    try {
      const product = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/product-order/cart/user/`,
        {
          productId,
          quantity,
          price,
          userId,
        }
      );
      // NO HACER DISTPACH
      //  ACCEDER DESDE EL CARRITO Y POR EL ID TRAIERME LAS PRODUCTS ORDER CART
      // /product-order/cart/user/:id
      // dispatch(addProductCart(product.data.result));
    } catch (err) {
      console.log("Err ACtion =>",{ err });
    }
  };
};

export const getCartUser = (id: any) => {
  return async (dispatch: any) => {
    try {
      const cart = (await axios(`${process.env.REACT_APP_BACKEND_URL}/product-order/cart/user/${id}`)).data
      dispatch(addProductCartState(cart.productsOrderUser)); 
      // CAMBIAR

    } catch (err) {
      console.log("Err ACtion =>",{ err });
    }
  };
};

export const setQuantityCart = ({id, quantity}:PropsSetCart) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true))
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/product-order/cart/user/${id}`,{ quantity })
    } catch (err) {
      console.log("Err ACtion =>",{ err });
    }finally{
      setTimeout(() => {
        dispatch(setLoading(false))
        dispatch(setUpdate())
      }, 450);
    }
  };
};

export const deleteProductCart = (id:number) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true))
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/product-order/cart/user/${id}`)
    } catch (err) {
      console.log("Err ACtion =>",{ err });
    }finally{
      setTimeout(() => {
        dispatch(setLoading(false))
        dispatch(setUpdate())
      }, 450);
    }
  };
};

export const deleteCartUser = (id:any) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true))
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/product-order/cart/user/all/${id}`)
    } catch (err) {
      console.log("Err ACtion =>",{ err });
    }finally{
      setTimeout(() => {
        dispatch(setLoading(false))
        dispatch(setUpdate())
      }, 450);
    }
  };
};
