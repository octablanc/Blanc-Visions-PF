import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

// Define a type for the slice state
interface ProductState {
  products: Pro[];
  loading: boolean;
  page: number;
}

export default interface Pro {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
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

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  loading: false,
  page: 1,
};

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { startLoadingProducts, setProducts, changePage } =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
