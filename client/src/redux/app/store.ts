import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../slices/Cart/cartSlice';
import { categoriesSlice } from '../slices/categories/categories.slice';
import { productSlice } from '../slices/products/productsSlice';
import { userSlice } from '../slices/user-authentication';

export const store = configureStore({
  reducer: {
    productsState: productSlice.reducer,
    categoriesState: categoriesSlice.reducer,
    cartState: cartSlice.reducer,
    userState: userSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
