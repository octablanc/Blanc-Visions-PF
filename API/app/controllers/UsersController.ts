import { Request, Response } from "express";
import { users } from "../../config/ConnectionDB";
import bcryptjs from 'bcryptjs';
/*
-Se enviará el email y password por la requesta en el body.
-Busca el registro dentro de la base de datos según  email.
-Compara que la password enviada por body si coincide con el registro traído de la base de datos.
-Si coinciden los datos, se devuelve "acceso correcto", sino un bad request con un mensaje indicado.*/

export async function getUsers(req: Request, res: Response) {
  const { mail, password } = req.body;
  try {
    if (!mail) return res.status(400).json({ mensaje: "Falta el email" });
    if (!password) return res.status(400).json({ mensaje: "Falta la contraseña" });

    const userEncontrated = await users.findOne({ where: { mail } });
    if (!userEncontrated) return res.json({ mensaje: 'Email no encontrado' });
  
    const compare = await bcryptjs.compare(password, userEncontrated.dataValues.password);
    if (!compare) return res.json("Contraseña incorrecta");
    
    // return res.json({ mensaje: "Este usuario, tuvo Acceso correcto" });
    return res.json({ userEncontrated });

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
      "birthday": "2022-12-07",
      "state": true
  }
*/
export async function postUser(req: Request, res: Response) {
  const { name, lastName, imageProfile, phone, mail, password, userName, birthday, state } = req.body;
  try {
    const mailVal = await users.findOne({ where: { mail } });
    const userNameVal = await users.findOne({ where: { userName } });

    if (mailVal) return res.json({ message: 'Este mail ya esta registrado' });
    if (userNameVal) return res.json({ message: 'Este nombre de usuario ya esta registrado' });

    const passwordHash = await bcryptjs.hash(password, 10);
    const userCreate = await users.create({ name, lastName, imageProfile, phone, mail, password: passwordHash, userName, birthday, state });
    
    return res.send([{ message: "POST USERRR  users", userCreate }]);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { userName, mail, password } = req.body;

  try {
    const userDelete = await users.findOne({ where: { userName, mail } });
    
    if (!userDelete) return res.json({ message: `Datos invalidos para eliminar a ${userName}` })

    const compare = await bcryptjs.compare(password, userDelete.dataValues.password);
    if (!compare) return res.json({ message: 'password invalid' });
    
    await userDelete.destroy();
    return res.json({message:`${userName} fue eliminado con exito`});

  } catch ({ message }) {
    return res.status(400).json({ message });
  }
}

