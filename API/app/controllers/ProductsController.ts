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
            {
                include : [{
                    model: Categories,
                    where: category? {
                        name: category 
                    } : undefined
                }],
                attributes: { exclude: ["categoryId"] }
            }
        );
        
        return res.send(result);
    } catch ({message}) {
        return res.status(400).send({message});
    }
}

export async function getProductByPk(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const result = await Products.findByPk(
            id,
            {
                include: Categories,
                attributes: { exclude: ["categoryId"] }
            }
        );

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

        return res.send(result);
    } catch ({ message }) {
        console.log(message)
        return res.status(400).send({message});
    }
}

export async function updateProduct(req:Request, res:Response) {
    try {
        const { id } = req.params;
        const newFields = req.body;

        const productToUpdate = await Products.findByPk(id);
        await productToUpdate?.update(newFields);
        await productToUpdate?.save();

        return res.send(productToUpdate);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function deleteProduct(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const productToDelete = await Products.findByPk(id);
        await productToDelete?.update({ state: false });
        await productToDelete?.save();

        return res.send({ message: "Product has been discharged!" });
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}