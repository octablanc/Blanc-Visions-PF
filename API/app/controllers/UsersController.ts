import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { users, roles } = DBcontext.models;

export async function getUsers(req:Request, res:Response) {
  try {
    const { state } = req.query;

    const result = await users.findAll({
      where: 
        state === 'true'?
          {
            state: true
          } :
          state === 'false'?
            {
              state: false
            } : {}
      ,
      include: roles,
      attributes: { exclude: ["roleId"] }
    });

    return res.send(result);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

/*
-Se enviará el email y password por la requesta en el body.
-Busca el registro dentro de la base de datos según  email.
-Compara que la password enviada por body si coincide con el registro traído de la base de datos.
-Si coinciden los datos, se devuelve "acceso correcto", sino un bad request con un mensaje indicado.*/
export async function getUserLogin(req: Request, res: Response) {
  const { mail, password } = req.body;
  try {
    if (!mail) {
      return res.status(400).json({ mensaje: "Falta el email" });
    }
    if (!password) {
      return res.status(400).json({ mensaje: "Falta la contraseña" });
    }
    const userEncontrated = await users.findOne({ where: { mail: mail } });
    if (!userEncontrated) {
      return res.status(400).json({ mensaje: "Email no encontrado" });
    }
    if (userEncontrated.dataValues.password !== password) {
      return res.status(400).json({ mensaje: "Contraseña incorrecta" });
    }

    return res.json(userEncontrated);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

export async function getUserById(req:Request, res:Response) {
  try {
    const { id } = req.params;
    
    const user = await users.findByPk(id);

    if(!user)
      return res.status(404).send({ message: "User not found!" });

    return res.send(user);
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
export async function postUser(req: Request, res: Response) {
  try {
    const actividadCreate = await users.create(req.body);
    return res.send([{ message: "POST USERRR  users", actividadCreate }]);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

export async function updateUser(req:Request, res:Response) {
  try {
    const { id } = req.params;
    const newFields = req.body;

    const userToUpdate = await users.findByPk(id);
    if(userToUpdate){
      await userToUpdate.update(newFields);
      await userToUpdate.save();
    }
    else
      throw new Error('User not found!');

    return res.send(userToUpdate);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function deleteUser(req:Request, res:Response) {
  try {
    const { id } = req.params;

    const userToDelete = await users.findByPk(id);
    if(userToDelete){
      await userToDelete.update({ state: false });
      await userToDelete.save();
    }
    else
      throw new Error('User not found!');

    return res.send(userToDelete);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}
