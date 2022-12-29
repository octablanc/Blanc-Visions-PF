import axios from "axios";

export async function postUser(user: object){
    try {
        await axios.post('http://localhost:3001/users', user);
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: object, id: Number | undefined) {
    try {
        await axios.put('http://localhost:3001/users/' + id, user);
    } catch ({message}) {
        console.log(message);
    }
}