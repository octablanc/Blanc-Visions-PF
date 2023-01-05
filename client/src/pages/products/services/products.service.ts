import axios from "axios";

export async function postProduct(product: Object, setLoading:React.Dispatch<React.SetStateAction<boolean>>, setOpen:React.Dispatch<React.SetStateAction<boolean>>){
    setLoading(true);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, product)
        .then(()=> { 
            setOpen(true);
            setLoading(false); 
        })
        .catch((error)=> console.error(error));
}