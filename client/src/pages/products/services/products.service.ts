import axios from "axios";

export async function postProduct(product: Object, setLoading:React.Dispatch<React.SetStateAction<boolean>>, setOpen:React.Dispatch<React.SetStateAction<boolean>>){
    setLoading(true);
    await axios.post('https://blanc-visions-pf-kingcomm.up.railway.app/products', product)
        .then(()=> { 
            setOpen(true);
            setLoading(false); 
        })
        .catch((error)=> console.error(error));
}