import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

// Define a type for the slice state
interface ProductState {
  products: Pro[];
  categories: Cat[];
  detail: UniquePro;
  loading: boolean;
  page: number;
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
  page: 1,
  detail: {
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
  },
};

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.loading = true;
    },
    getProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    createProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    detailProduct: (state, action) => {
      state.detail = action.payload;
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
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
