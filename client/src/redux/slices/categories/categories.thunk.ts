import { getCategories } from './categories.slice';
import axios from 'axios';

export function getAllCategories() {
  return async (dispatch: any) => {
    const { data } = await axios.get(`http://localhost:3001/categories`);
    dispatch(getCategories(data));
  };
}
