import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { cartBuy, users, orderBuy } = DBcontext.models;

export async function getCart(req: Request, res: Response) {
  const { id } = req.body;
  try {
    const cart = await cartBuy.findByPk(id, {include:orderBuy});
    return res.json({ message: "Get Carts", cart });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postCart(req: Request, res: Response) {
  try {
    const cartCreate = await cartBuy.create(req.body);    

    return res.send({ message: "Post cart", Create: cartCreate });
  } catch ({ message }) {
    console.log("MSG ERR=> ", message);
    return res.status(400).send({ message });
  }
}


