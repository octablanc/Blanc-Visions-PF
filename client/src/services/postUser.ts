import axios from "axios";

export async function postUser(user: object){
    try {
        await axios.post('http://localhost:3001/users', user);
    } catch (error) {
        console.log(error);
    }
}