import axios from "axios";

export async function postProduct(product: Object, setLoading:React.Dispatch<React.SetStateAction<boolean>>, setOpen:React.Dispatch<React.SetStateAction<boolean>>){
    setLoading(true);
    await axios.post('http://localhost:3001/products', product)
        .then(()=> { 
            setOpen(true);
            setLoading(false); 
        })
        .catch((error)=> console.error(error));
}