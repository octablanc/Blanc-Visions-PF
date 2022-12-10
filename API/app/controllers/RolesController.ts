import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";

const Roles = DBcontext.models.roles;

export async function getRoles(_req:Request, res:Response) {
    try {
        const result = await Roles.findAll();

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function getRoleById(req:Request, res:Response) {
    try {
        const { id } = req.params;

        const role = await Roles.findByPk(id);
        if(!role)
            return res.status(404).send({ message: "Role not found!" });

        return res.send(role);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function postRole(req:Request, res:Response){
    try {
        const newRole = req.body;

        const result = await Roles.create(newRole);

        return res.send(result);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function updateRole(req:Request, res:Response){
    try {
        const { id } = req.params
        const newFields = req.body;

        const roleToUpdate = await Roles.findByPk(id);
        if(roleToUpdate){
            await roleToUpdate?.update(newFields);
            await roleToUpdate?.save();
        }
        else
            return res.status(404).send({ message: "Role not found!" });

        return res.send(roleToUpdate);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}

export async function deleteRole(req:Request, res:Response){
    try {
        const { id } = req.params;
        
        const roleToDelete = await Roles.findByPk(id);
        if(roleToDelete){
            await roleToDelete.update({ state: false });
            await roleToDelete.save();
        }
        else 
            return res.status(404).send({ message: "Role not found!" });

        return res.send(roleToDelete);
    } catch ({ message }) {
        return res.status(400).send({ message });
    }
}