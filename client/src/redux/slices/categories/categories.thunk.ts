import { getCategories } from './categories.slice';
import axios from 'axios';

export function getAllCategories() {
  return async (dispatch: any) => {
    const { data } = await axios.get(`https://blanc-visions-pf-kingcomm.up.railway.app/categories`);
    dispatch(getCategories(data));
  };
}
