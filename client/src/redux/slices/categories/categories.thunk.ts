import { setCategories } from "./categories.slice";
import axios from 'axios';

export function getCategories(){
    return async ( dispatch:any ) => {
        const { data } = await axios.get(`http://localhost:3001/categories`)
        dispatch(setCategories(data));
    }
}