import { setUser, setLoading } from "./user.slice";
import axios from 'axios';
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { User } from "../../../models/User.model";

export function getUser( mail: string | null ){
    return async ( dispatch:any ) => {
        if(!mail){
            dispatch(setUser(null));
        }
        else {
            try {
                dispatch(setLoading(true));
                const data:User = (await axios.get(`http://localhost:3001/users?mail=${mail}`)).data;
                dispatch(setUser(data));
            } catch ({ message }) {
                signOut(auth);
                window.alert(message);
            }   
        }
    }
}