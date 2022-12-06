import { Request, Response} from 'express';
// import {} from "../../config/ConnectionDB";

export function getProducts( _req:Request, res:Response){
    try {
        return res.send([{message: "Get Product"}]);
    } catch ({message}) {
        return res.status(400).send({message});
    }
}

export function postUser( _req:Request, res:Response){
    try {
        return res.send([{message: "Post Product"}]);
    } catch ({ message }) {
        console.log(message)
        return res.status(400).send({message});
    }
}