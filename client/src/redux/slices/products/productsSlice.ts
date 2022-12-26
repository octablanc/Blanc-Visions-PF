import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

export interface UserInfo {
  id: number;
  imageProfile: string;
  name: string;
  lastName: string;
  phone: number;
  mail: string;
  password: string;
  userName: string;
  birthday: string;
  state: boolean;
  roleId: number;
}
// Define a type for the slice state
interface ProductState {
  products: Pro[];
  categories: Cat[];
  currentProduct: UniquePro;
  loading: boolean;
  pagination: {
    page: number;
    quantity: number;
    category: undefined | string;
    productsLength: number;
  };
  user: UserInfo;
  // detail: Pro;
}

export default interface Pro {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  id: number;
  name: string;
  code: string;
  description: string;
  image: string;
  price: number;
  entrega: string;
  stock: number;
  id_category: number;
  state: Boolean;
}
export interface UniquePro {
  id: number;
  name: string;
  code: string;
  description: string;
  image: string;
  price: number;
  entrega: string;
  stock: number;
  id_category: number;
  state: Boolean;
  category: string;
  properties: [];
  images: [];
  loading: boolean;
}

export interface Cat {
  id: number;
  name: string;
  description: string;
  state: Boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  categories: [],
  loading: false,
  currentProduct: {
    id: 0,
    name: '',
    code: '',
    description: '',
    image: '',
    price: 0,
    stock: 0,
    entrega: '',
    id_category: 0,
    state: true,
    category: '',
    properties: [],
    images: [],
    loading: false,
  },
  pagination: {
    page: 1,
    quantity: 2,
    category: undefined,
    productsLength: 0,
  },

  //* Usuario harcodeado para testear el formulario de modificacion
  user: {
    id: 1,
    imageProfile: 'http',
    name: 'tomas gg',
    lastName: 'apellido jhj',
    phone: 123123,
    mail: 'tomasd@gmail',
    password: 'contra11231',
    userName: 'tomasUser',
    birthday: '2022-12-15',
    state: true,
    roleId: 1,
  },
};

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoadingProducts: (state, action) => {
      state.loading = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    productOffCategories: (state, action) => {
      state.products = action.payload;
    },
    changePage: (state, action) => {
      state.products = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    createProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    detailProduct: (state, action) => {
      state.loading = false;
      state.currentProduct = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.page = action.payload.page;
      state.pagination.category = action.payload.category;
      state.pagination.productsLength = action.payload.productsLength;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  startLoadingProducts,
  getProducts,
  changePage,
  getCategories,
  createProduct,
  detailProduct,
  productOffCategories,
  setPagination,
  setUser,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
