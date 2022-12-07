import { Request, Response } from "express";
import { users } from "../../config/ConnectionDB";

/*
-Se enviará el email y password por la requesta en el body.
-Busca el registro dentro de la base de datos según  email.
-Compara que la password enviada por body si coincide con el registro traído de la base de datos.
-Si coinciden los datos, se devuelve "acceso correcto", sino un bad request con un mensaje indicado.*/
export async function getUsers(req: Request, res: Response) {
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

    return res.json("Este usuario, tuvo Acceso correcto");
  } catch ({ message }) {
    return res.status(400).json({ message });
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
