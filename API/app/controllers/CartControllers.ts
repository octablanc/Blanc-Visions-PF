import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
// import UsersModel from "../models/Users.model";
const { cartBuy, users } = DBcontext.models;
// const { cartBuy } = DBcontext.models;

export async function getCart(_req: Request, res: Response) {
  try {
    // const carts = await cartBuy.findByPk(1);
    
    // const carts = await cartBuy.findAll({attributes:['priceTotal'], include:users});
      const carts = await cartBuy.findAll({ include: users });

    return res.json({ message: "Get Carts", carts });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

// const actividadCreate = await Turistas.create(req.body);
// console.log(actividadCreate.__proto__);
export async function postCart(req: Request, res: Response) {
  try {
    const { priceTotal, userId } = req.body;
    const cart = await cartBuy.create({ priceTotal });
    // const cart = await cartBuy.create(req.body);
    
      // await cart.adduserId(userId)
      const idEncontrado = await users.findByPk(userId)
      await cart.addUser(idEncontrado)
      // userId
    // console.log("CREATE 1 =>", cartUno);
    // console.log("CREATE 2 =>", cartDos);
    // console.log("CREATE 3 =>", cartTres);

    return res.send({ message: "Post cart", Create: cart });
  } catch ({ message }) {
    console.log("MSG ERR=> ", message);
    return res.status(400).send({ message });
  }
}
