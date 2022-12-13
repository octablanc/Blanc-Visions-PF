import {
  getProducts,
  getCategories,
  startLoadingProducts,
  createProduct,
  detailProduct,
  changePage,
  productOffCategories,
  setPagination
} from "./productsSlice";

import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingProducts(true));
      let products = (await axios(`http://localhost:3001/products`)).data;
      // console.log(products)
      // console.log("GET ALL PRODUCT");
      dispatch(getProducts(products));
      // dispatch(getPages(products.length));
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
      // dispatch(getPages(productByCategories.length));
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

// export const getProductsPage = (page: number, quantity: number, category: string | null| undefined) => {
//   return async (dispatch: any) => {
//     try {
//       dispatch(startLoadingProducts(true));
//       let products = (
//         await axios(
//           `http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}}`
//         )
//       ).data;
//       dispatch(changePage(products));
//     } catch (error) {
//       console.log(error);
//     }finally{dispatch(startLoadingProducts(false))}
//   };
// };
export const getProductsPage = (page: number, quantity: number, category: string | undefined) => {
  return async (dispatch: any) => {
    // console.log("GET PRODUCT PAGE>=", page, quantity, category);

    try {
      dispatch(startLoadingProducts(true));

      let products;
      if (category) {
        products = (await axios(`http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}&category=${category}`)).data;
      } else {
        products = (await axios(`http://localhost:3001/products/paginate?page=${page}&quantityProducts=${quantity}}`)).data;
      }
      dispatch(setPagination({page, category, productsLength: products.productsLength}))
      dispatch(changePage(products.result));
    } catch (error) {
      console.log("EROR=>",error);
    } finally {
      dispatch(startLoadingProducts(false));
    }
  };
};

// export const getAllPage = () => {
//   return async (dispatch: any) => {
//     try {
//       dispatch(startLoadingProducts(true));
//       let totalPages = (await axios(`http://localhost:3001/products`)).data
//         .length;
//       dispatch(getPages(totalPages));
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(startLoadingProducts(false));
//     }
//   };
// };


// export const setPaginationPage = (payload: number) => {
//   return async (dispatch: any) => {
//     try {
//       // dispatch(startLoadingProducts(true));
//       dispatch(setPage(payload))
//       // dispatch(startLoadingProducts(false));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const setPaginationCategory = (payload: string | undefined) => {
//   return async (dispatch: any) => {
//     try {
//       dispatch(startLoadingProducts(true));
//       dispatch(setCategory(payload))
//       dispatch(startLoadingProducts(false));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
