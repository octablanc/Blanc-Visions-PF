import {
  getProducts,
  getCategories,
  startLoadingProducts,
  createProduct,
  detailProduct,
  changePage,
  productOffCategories,
  setPagination,
  setUser,
} from './productsSlice';
import { UserInfo } from './productsSlice';
import axios from 'axios';

export const getAllProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let products = (await axios(`http://localhost:3001/products`)).data;
      dispatch(getProducts(products));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};

export const getProductById = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let productsId = (await axios(`http://localhost:3001/products/${id}`))
        .data;
      dispatch(detailProduct(productsId));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};

export const getAllCategories = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let categories = (await axios(`http://localhost:3001/categories`)).data;
      dispatch(getCategories(categories));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};
export const getProductCategories = (value: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let productByCategories = (
        await axios(`http://localhost:3001/products?category=${value}`)
      ).data.result;
      dispatch(productOffCategories(productByCategories));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};

export const createNewProduct = (product: any) => {
  return async (dispatch: any) => {
    try {
      let newProduct = await axios.post(
        `http://localhost:3001/products`,
        product
      );
      dispatch(createProduct(newProduct));
    } catch (err) {}
  };
};
export const getProductsPage = (
  page: number,
  quantity: number,
  category: string | undefined = undefined,
  discount: number = 0,
  price: number = 1
  // data : 'id' | 'discount' | 'price' = 'id',
  // order: 'ASC' | 'DESC' = 'ASC',
) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      // console.log({ page, quantity, category, discount, price, data, order });
      // console.log({ page, quantity, category, discount, price, data, order });

      let products;
      if (category) {
        products = (
          await axios(
            // `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}&discount=${discount}&price=${price}&data=${data}&order=${order}`
            `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}&discount=${discount}&price=${price}`
          )
        ).data;
      } else {
        products = (
          await axios(
            // `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&discount=${discount}&price=${price}&data=${data}&order=${order}`
            `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&discount=${discount}&price=${price}`
          )
        ).data;
      }
      // if (category) {
      //   products = (
      //     await axios(
      //       `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}`
      //     )
      //   ).data;
      // let products;
      // if (category) {
      //   products = (
      //     await axios(
      //       `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}`
      //     )
      //   ).data;
      // } else {
      //   products = (
      //     await axios(
      //       `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}}`
      //     )
      //   ).data;
      // }
      dispatch(
        setPagination({
          page,
          category,
          productsLength: products.productsLength,
          price,
          discount,
          // data,
          // order
        })
      );
      dispatch(changePage(products.result));
    } catch (error) {
      console.log('EROR=>', error);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};

export const updateUser = (user: UserInfo) => {
  return async (dispatch: any) => {
    try {
      const {
        id,
        imageProfile,
        name,
        lastName,
        phone,
        mail,
        password,
        userName,
        birthday,
        state,
        roleId,
      } = user;

      let updateUser = await axios.put(`http://localhost:3001/users/${id}`, {
        imageProfile,
        name,
        lastName,
        phone,
        mail,
        password,
        userName,
        birthday,
        state,
        roleId,
      });
      dispatch(setUser(updateUser.data));
    } catch (error) {
      console.log('EROR=>', error);
    }
  };
};
