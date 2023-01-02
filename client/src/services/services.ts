import axios from "axios";

export async function postUser(user: object){
    try {
        await axios.post('https://blanc-visions-pf-kingcomm.up.railway.app/users', user);
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: object, id: Number | undefined) {
    try {
        await axios.put('https://blanc-visions-pf-kingcomm.up.railway.app/users/' + id, user);
    } catch ({message}) {
        console.log(message);
    }
}