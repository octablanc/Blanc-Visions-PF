import { getCategories } from './categories.slice';
import axios from 'axios';

export function getAllCategories() {
  return async (dispatch: any) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
    dispatch(getCategories(data));
  };
}
