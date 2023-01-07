import { getProductDetail } from './cartSlice';
import axios from 'axios';
import * as dotenv from 'dotenv';

const { HOST } = process.env;
interface Props {
  productId: number;
  quantity: number;
  price: number;
  userId: number;
}

export const addProductCart = ({
  productId,
  quantity,
  price,
  userId,
}: Props) => {
  return async (dispatch: any) => {
    try {
      console.log("MANDA POR BODY",{
        productId,
        quantity,
        price,
        userId,
      })
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

// export const addProduct = (id: number) => {
//   return async (dispatch: any) => {
//     const product = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`);
//     // dispatch(addToCart(product));
//   };
// }

// export const getProductById = (id: number) => {
//   return async (dispatch: any) => {
//     try {
//       const product = (await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)).data;
//       dispatch(getProductDetail(product))
//       console.log(product)
//     } catch (error) {
//       console.log('Error:', error)
//     }
//   };
// };

// export const updateProductStock = (product: UniquePro) => {
//   return async (dispatch: any) => {
//     try {
//       const updatedProduct = await axios.put(`http://localhost:3001/products/${id}`, product.stock)
//       dispatch()

//     } catch (error) {

//     }
//   };
// }
