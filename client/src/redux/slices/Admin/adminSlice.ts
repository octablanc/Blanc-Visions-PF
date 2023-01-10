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
interface currentCategory {
  name: string;
  description: string;
  state: boolean;
  id: number;
}

interface Users {
  imageProfile: string;
  id: number;
  name: string;
  phone: number;
  lastName: string;
  mail: string;
  state: boolean;
}
export interface ProductOfAdm {
  id: number;
  name: string;
  code: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  entrega: string;
  stock: number;
  id_category: number;
  state: Boolean | boolean;
  category: currentCategory;
  properties: [];
  images: [];
  loading: boolean;
}
interface AdminState {
  products: UniquePro[];
  currentProduct: ProductOfAdm;
  users: Users[];
  userId: {};
  categoryId: currentCategory;
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
  searchAdmin: string;
  loading: boolean;
}
const initialState: AdminState = {
  products: [],
  currentProduct: {
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
    category: {
      name: '',
      description: '',
      state: true,
      id: 0,
    },
    properties: [],
    images: [],
    loading: false,
  },
  users: [],
  userId: {},
  categories: [],
  categoryId: {
    name: '',
    description: '',
    state: true,
    id: 0,
  },
  sales: [],
  paginationAdmin: {
    productsLength: 0,
    page: 1,
    quantity: 8,
    data: 'id',
    order: 'ASC',
    name: '',
  },
  loading: false,

  searchAdmin: '',
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
      state.currentProduct = action.payload;
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
    createCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    searchProductByName: (state, action) => {
      state.searchAdmin = action.payload;
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
  createCategory,
  searchProductByName,

  //   updateProductAdmin
} = adminSlice.actions;
