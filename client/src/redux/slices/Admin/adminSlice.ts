import { createSlice } from '@reduxjs/toolkit';
import { UniquePro } from '../products';
import { ProductOrder } from '../misCompras/buySlice';
export interface OfCategories {
  id: number;
  name: string;
  description: string;
  state: boolean;
}
interface Sales {
  userId: number;
  id: number;
  priceTotalDiscount: number;
  productOrders: ProductOrder[];
}

interface Users {
  id: number;
  name: string;
}
interface AdminState {
  products: UniquePro[];
  users: Users[];
  userId: [];
  categoryId: [];
  categories: OfCategories[];
  sales: Sales[];
  paginationAdmin: {
    page: number;
    quantity: number;
    productsLength: number;
    data: string;
    order: string;
    name: string;
  };
  loading: boolean;
  actuallityProduct: {};
}
const initialState: AdminState = {
  products: [],
  users: [],
  userId: [],
  categories: [],
  categoryId: [],
  sales: [],
  paginationAdmin: {
    productsLength: 0,
    page: 1,
    quantity: 100,
    data: 'id',
    order: 'ASC',
    name: '',
  },
  loading: false,
  actuallityProduct: {
    // id: 0,
    // name: '',
    // code: '',
    // description: '',
    // image: '',
    // price: 0,
    // discount: 0,
    // stock: 0,
    // entrega: '',
    // id_category: 0,
    // state: true,
    // category: '',
    // properties: [],
    // images: [],
    // loading: false,
  },
};

export const adminSlice = createSlice({
  name: 'aministrador',
  initialState,
  reducers: {
    startLoadingAdmin: (state, action) => {
      state.loading = action.payload;
    },
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    getCategoriesAdmin: (state, action) => {
      state.categories = action.payload;
    },
    setPaginationAdmin: (state, action) => {
      state.paginationAdmin.page = action.payload.page;
      state.paginationAdmin.productsLength = action.payload.productsLength;

      state.paginationAdmin.data = action.payload.data;
      state.paginationAdmin.order = action.payload.order;
      state.paginationAdmin.name = action.payload.name;
    },
    detailProductAdmin: (state, action) => {
      state.actuallityProduct = action.payload;
    },
    categoriesDetailAdmin: (state, action) => {
      state.categoryId = action.payload;
    },
    createProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    userDetail: (state, action) => {
      state.userId = action.payload;
    },
    getSales: (state, action) => {
      state.sales = action.payload;
    },
  },
});

export const {
  getCategoriesAdmin,
  setProduct,
  createProduct,
  setPaginationAdmin,
  startLoadingAdmin,
  detailProductAdmin,
  categoriesDetailAdmin,
  setUsers,
  userDetail,
  getSales,

  //   updateProductAdmin
} = adminSlice.actions;
