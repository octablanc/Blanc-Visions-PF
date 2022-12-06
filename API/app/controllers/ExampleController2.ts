import { Request, Response} from 'express';

export function getUsers( _req:Request, res:Response){
    try {
        return res.send([{message: "all users x 2"}]);
    } catch ({message}) {
        return res.status(400).send({message});
    }
}