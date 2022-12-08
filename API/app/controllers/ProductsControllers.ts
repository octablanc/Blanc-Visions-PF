import { Request, Response} from 'express';

// Data base context import
import DBcontext from '../../config/ConnectionDB';

// Models
const Products  = DBcontext.models.products;
const Categories  = DBcontext.models.categories;

export async function getProducts(req:Request, res:Response){
    try {
        const { category } = req.query;
        
        const result = await Products.findAll(
            category? {
                include : [{
                    model: Categories,
                    where: {
                        name: category 
                    }
                }]
            } : undefined
        );
        
        return res.send(result);
    } catch ({message}) {
        return res.status(400).send({message});
    }
}

export async function getProductByPk(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const result = await Products.findByPk(id);

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function postProduct(req:Request, res:Response){
    try {
        const product = req.body;

        let result = await Products.create(
            product
        );
        console.log(result);
        return res.send(result);
    } catch ({ message }) {
        console.log(message)
        return res.status(400).send({message});
    }
}