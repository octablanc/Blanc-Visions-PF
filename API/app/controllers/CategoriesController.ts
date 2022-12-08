import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";

// Model
const Categories = DBcontext.models.categories;

export async function getCategories(req:Request, res:Response){
    try {
        const { name } = req.query;

        const result = await Categories.findAll(
            name? {
                where: {
                    name
                }
            } : {}
        );

        return res.send(result);
    } catch ({message}) {
        return res.status(400).send({ message });
    }
}

export async function getCategoriesByPk(req:Request, res:Response){
    try {
        const { id } = req.params;

        const result = await Categories.findByPk(id);

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function postCategory(req:Request, res:Response) {
    try {
        const category = req.body;

        const result = await Categories.create(category);

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function updateCategory(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const category = await Categories.findByPk(id);

        const newFields = req.body;

        await category?.update(newFields);
        await category?.save();

        return res.send(category);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function deleteCategory(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const categoryToDelete = await Categories.findByPk(id);

        await categoryToDelete?.destroy();

        return res.send({ message: "Category deleted!" });
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}
