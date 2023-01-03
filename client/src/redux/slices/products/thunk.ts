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
  changeDiscountPage,
} from './productsSlice';
import { UserInfo } from './productsSlice';
import axios from 'axios';

export const getAllProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let products = (await axios(`${process.env.REACT_APP_BACKEND_URL}/products`)).data;
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
      let productsId = (await axios(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`))
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
      let categories = (await axios(`${process.env.REACT_APP_BACKEND_URL}/categories`)).data;
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
        await axios(`${process.env.REACT_APP_BACKEND_URL}/products?category=${value}`)
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
        `${process.env.REACT_APP_BACKEND_URL}/products`,
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
  price: number = 0,
  data: string,
  order: string,
  name: string = ''
) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let products;
      if (category && name) {
        products = (
          await axios(
            `${process.env.REACT_APP_BACKEND_URL}/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}&discount=${discount}&price=${price}&data=${data}&order=${order}&name=${name}`
          )
        ).data;
      }
      if (name.trim().length > 0) {
        products = (
          await axios(
            `${process.env.REACT_APP_BACKEND_URL}/products/paginate?page=${page}&quantityProducts=${quantity}&discount=${discount}&price=${price}&data=${data}&order=${order}&name=${name}`
          )
        ).data;
      } 
      if (category) {
        products = (
          await axios(
            `${process.env.REACT_APP_BACKEND_URL}/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}&discount=${discount}&price=${price}&data=${data}&order=${order}&name=${name}`
          )
        ).data;
      } else {
        products = (
          await axios(
            `${process.env.REACT_APP_BACKEND_URL}/products/paginate?page=${page}&quantityProducts=${quantity}&discount=${discount}&price=${price}&data=${data}&order=${order}&name=${name}`
          )
        ).data;
      }
      dispatch(
        setPagination({
          page,
          category,
          productsLength: products.productsLength,
          price,
          discount,
          data,
          order,
          name,
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

export const getProductsDiscountPage = (
  page: number,
  quantity: number,
  category: string | undefined = undefined,
  discount: number = 0,
  price: number = 0,
  data: string,
  order: string,
  name: string = ''
) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let products;

      products = (
        await axios(
          `${process.env.REACT_APP_BACKEND_URL}/products/paginate?page=${page}&quantityProducts=${quantity}&discount=${discount}&price=${price}&data=${data}&order=${order}&name=${name}`
        )
      ).data;

      dispatch(
        setPagination({
          page,
          category,
          productsLength: products.productsLength,
          price,
          discount,
          data,
          order,
          name,
        })
      );
      dispatch(changeDiscountPage(products.result));
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

      let updateUser = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
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
