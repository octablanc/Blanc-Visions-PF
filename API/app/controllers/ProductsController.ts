import { Request, Response} from 'express';

// Data base context import
import DBcontext from '../../config/ConnectionDB';

// Models
const Products  = DBcontext.models.products;
const Categories  = DBcontext.models.categories;

export async function getProducts(req:Request, res:Response){
    /*
    Querys: 
    state = true or false
    category = Category we need to filter the products: Shoes, Phones, etc.
    */
    try {
        const { state, category } = req.query;
        
        const result = await Products.findAll(
            {
                where: state === 'false'? { state: false } : state === 'true' ? { state: true } : undefined,
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
    } catch ({ message }) {
        return res.status(400).send({ message });
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

export async function paginateProducts(req:Request, res:Response) {
    /*
    Querys: 
    page = The number of page that we need to bring: 1, 2 , 3,etc.
    quantityProducts = Quantity of product that we need per page: 10, 15, 20, etc.
    category = Category we need to filter the products: Shoes, Phones, etc.
    */
    try {
        console.log(req.query?.page + ' ' + req.query?.quantityProducts);
        if(req.query?.page && req.query?.quantityProducts){
            const page = parseInt(req.query.page.toString());
            const quantityProducts = parseInt(req.query.quantityProducts.toString());

            if(page && quantityProducts){
                if(page<1 && quantityProducts<1)
                    throw new Error('The fields can only be greater than 0!');
                
                const { category } = req.query;

                const result = await Products.findAll({
                    where: {
                        state: true
                    },
                    include : [{
                        model: Categories,
                        where: category? {
                            name: category 
                        } : undefined
                    }],
                    attributes: { exclude: ["categoryId"] },
                    offset: quantityProducts * (page-1), 
                    limit:  quantityProducts
                });

                return res.send(result);
            }
            throw new Error('The fields can only be numbers!');
        }
        throw new Error('Some filed is empty!');
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}