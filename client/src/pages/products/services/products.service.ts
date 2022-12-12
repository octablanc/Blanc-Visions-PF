import axios from "axios";

export async function postProduct(product: Object){
    await axios.post('http://localhost:3001/products', product)
        .then(()=> console.log('Product successfully published!'))
        .catch((error)=> console.error(error));
}