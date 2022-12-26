import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";

const ProductsProperties = DBcontext.models.products_properties;

export async function getProperties(req:Request, res:Response){
    try {
        const { productId } = req.query;

        const result = await ProductsProperties.findAll({
            where: productId? { productId } : {}
        });

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function postProperty(req:Request, res:Response) {
    try {
        const property = req.body;

        const newProperty = await ProductsProperties.create(property);
        
        return res.send(newProperty);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function updateProperty(req:Request, res:Response){
    try {
        const { id } = req.params;
        const newFields = req.body;

        const propertyToUpdate = await ProductsProperties.findByPk(id);
        await propertyToUpdate?.update(newFields);
        await propertyToUpdate?.save();

        return res.send(propertyToUpdate);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function deleteProperty(req:Request, res:Response){
    try {
        const { id } = req.params;

        const propertyToDelete = await ProductsProperties.findByPk(id);
        await propertyToDelete?.destroy();

        return res.send({ message: 'Property deleted successfully' });
    } catch ({ message }) {
        return res.status(400).send(message);
    }
}