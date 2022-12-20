import { setUser } from "./user.slice";
import axios from 'axios';

export function getUser( mail: string | null ){
    return async ( dispatch:any ) => {
        if(!mail){
            dispatch(setUser(null));
        }
        else {
            const { data } = await axios.get(`http://localhost:3001/users?mail=${mail}`);
            dispatch(setUser(data));
        }
    }
}