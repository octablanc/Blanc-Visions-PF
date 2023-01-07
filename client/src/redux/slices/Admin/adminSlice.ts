import { createSlice } from '@reduxjs/toolkit';
import { UniquePro } from '../products';

interface AdminState {
  products: UniquePro[];
  users: [];
  categoryId: [];
  categories: [];
  sales: [];
  paginationAdmin: {
    page: number;
    quantity: number;
    productsLength: number;
    data: string;
    order: string;
    name: string;
  };
  loading: boolean;
  actuallityProduct: UniquePro;
}
const initialState: AdminState = {
  products: [],
  users: [],
  categories: [],
  categoryId: [],
  sales: [],
  paginationAdmin: {
    productsLength: 0,
    page: 1,
    quantity: 4,
    data: 'id',
    order: 'ASC',
    name: '',
  },
  loading: false,
  actuallityProduct: {
    id: 0,
    name: '',
    code: '',
    description: '',
    image: '',
    price: 0,
    discount: 0,
    stock: 0,
    entrega: '',
    id_category: 0,
    state: true,
    category: '',
    properties: [],
    images: [],
    loading: false,
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
    // updateProductAdmin: (state, action) => {
    //     state.products =
    //   }
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

  //   updateProductAdmin
} = adminSlice.actions;
