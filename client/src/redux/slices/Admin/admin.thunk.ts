import axios from 'axios';
import {
  getCategoriesAdmin,
  detailProductAdmin,
  setProduct,
  setPaginationAdmin,
  startLoadingAdmin,
  categoriesDetailAdmin,
  createProduct,
  userDetail,
  setUsers,
  getSales,
} from './adminSlice';

//OBTIENE TODOS LOS PRODUCTOS CON EL PAGINADO
export const getProductsAdmin = (
  page: number,
  quantity: number,
  data: string,
  order: string,
  name: string = ''
) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      const products = (
        await axios(
          `${process.env.REACT_APP_BACKEND_URL}/products?page=${page}&quantityProducts=${quantity}&data=${data}&order=${order}&name=${name}`
        )
      ).data;
      dispatch(
        setPaginationAdmin({
          page,
          productsLength: products.productsLength,
          data,
          order,
          name,
        })
      );
      dispatch(setProduct(products.result));
    } catch (error) {
      console.log('Error:', error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};
//OBTIENE EL PRODUCTO POR EL ID(DETALLE)
export const getProductByIdAdmin = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let productsId = (
        await axios(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`)
      ).data;
      dispatch(detailProductAdmin(productsId));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//CREA UN NUEVO PRODUCTO
export const createNewProduct = (product: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));

      let newProduct = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/products`,
        product
      );
      dispatch(createProduct(newProduct));
    } catch (err) {
      console.log('error=>', err);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//ACTUALIZA UN PRODUCTO
export const updateProduct = (id: number, product: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let changeProduct = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}`,
        product
      );
      dispatch(startLoadingAdmin(false));
      console.log(changeProduct, 'estoy en put ');
    } catch (error) {
      console.log('error al actualizar producto=>', error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//BORRA UN PRODUCTO(LOSETEA EN FALSO)
export const deleteProductAdmin = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let deteleProduct = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}`
      );
      dispatch(startLoadingAdmin(false));
      console.log(deteleProduct, 'estoy en deleteproductadmin ');
    } catch (error) {
      console.log('error al actualizar producto=>', error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//OBTIENE TODAS LAS CATEGORIAS
export const getAllCategoriesAdmin = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let categories = (
        await axios(`${process.env.REACT_APP_BACKEND_URL}/categories`)
      ).data;
      dispatch(getCategoriesAdmin(categories));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};
//ACTUALIZA TODAS LAS CATEGORIAS
export const updateCategory = (id: number, category: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let changeCategory = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/categories/${id}`,
        category
      );
      dispatch(startLoadingAdmin(false));
      console.log(changeCategory, 'estoy en put ');
    } catch (error) {
      console.log('error al actualizar categoria=>', error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//OBTIENE LA CATEGORIA POR EL ID
export const getCategoryByIdAdmin = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let categoryId = (
        await axios(`${process.env.REACT_APP_BACKEND_URL}/categories/${id}`)
      ).data;
      dispatch(categoriesDetailAdmin(categoryId));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//TODOS LOS USUARIOS
export const getUsersAdmin = (
  state: boolean | undefined = undefined,
  mail: string = ''
) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let allUsers = (
        await axios(
          `${process.env.REACT_APP_BACKEND_URL}/users?state=${state}&mail=${mail}`
        )
      ).data;
      dispatch(setUsers(allUsers));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//USUARIO POR ID CON SU RESPECTIVA COMPRA
export const getUserIdAdmin = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let userId = (
        await axios(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
      ).data;
      dispatch(userDetail(userId));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//actualiza el usuario
export const updateUser = (id: number, userActualiz: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let userChanged = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
        userActualiz
      );
      console.log(userChanged, 'actualizado el usario');
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//borra el usuario
export const deleteUser = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let userDelete = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/${id}`
      );
      console.log(userDelete, 'seteado en false al usario');
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};

//obtiene todas las compras
export const getAllSales = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startLoadingAdmin(true));
      let sales = (
        await axios(`${process.env.REACT_APP_BACKEND_URL}/order-buy`)
      ).data;
      dispatch(getSales(sales.all));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(startLoadingAdmin(false));
    }
  };
};
