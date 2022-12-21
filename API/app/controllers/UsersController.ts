import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";

const { users, roles } = DBcontext.models;

export async function getUsers(req: Request, res: Response) {
  try {
    const { state, mail } = req.query;
    let result;

    if (mail) {
      result = await users.findOne({
        where: {
          mail,
        },
        include: roles,
        attributes: { exclude: ["roleId"] },
      });

      if(!result)
        throw new Error('User not found!');
    } else {
      result = await users.findAll({
        where:
          state === "true"
            ? {
                state: true,
              }
            : state === "false"
            ? {
                state: false,
              }
            : {},
        include: roles,
        attributes: { exclude: ["roleId"] },
      });
    }

    return res.send(result);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const user = await users.findByPk(id);

    if (!user) return res.status(404).send({ message: "User not found!" });

    return res.send(user);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function getUserByMail(req: Request, res: Response) {
  try {
    const { mail } = req.body;
    console.log(mail);
    const user = await users.findOne({
      where: {
        mail
      }
    });

    if(!user)
      return res.status(404).send({ message: "User not found!" });

    return res.send(user);
    return res.send({});
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postUser(req: Request, res: Response) {
  try {
    const newUser = req.body; 
    
    const userCreate = await users.create({ newUser });
    return res.send([{ message: "post user", userCreate }]);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const newFields = req.body;
    
    const userToUpdate = await users.findByPk(id);
    if (userToUpdate) {
      await userToUpdate.update(newFields);
      await userToUpdate.save();
    } else throw new Error("User not found!");
    
    return res.send(userToUpdate);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const userToDelete = await users.findByPk(id);
    if (userToDelete) {
      await userToDelete.update({ state: false });
      await userToDelete.save();
    } else throw new Error("User not found!");
    
    return res.send(userToDelete);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}
    //Formato para enviar un Usuario:
    /*
        {
          "name": "Lucas 2022",
          "lastName": "Alegre",
          "imageProfile": "Una imagen",
          "phone": 3454,
          "mail": "lucasPruebo@gmail.com",
          "password": "contraseña12345",
          "userName": "Soy Un Nombre de  Usuario",
          "birthday": "2022-12-07"
          "state": true,
          roleId: 1
      }
    */