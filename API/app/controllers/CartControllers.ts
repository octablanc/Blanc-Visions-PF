import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { cartBuy, users } = DBcontext.models;

export async function getCart(req: Request, res: Response) {
  const { id } = req.body;
  try {
    const cart = await cartBuy.findByPk(id);
    return res.json({ message: "Get Carts", cart });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postCart(req: Request, res: Response) {
  try {
    const { priceTotal, userId } = req.body;
    // Tambien tiene que llegar un "id orden de compra"
    const cartCreate = await cartBuy.create({ priceTotal });
    
    const idEncontrado = await users.findByPk(userId);
    // await cartCreate.adduserId(idEncontrado) // falta refactorizar esta linea
    console.log("busca ID => ", idEncontrado);

    return res.send({ message: "Post cart", Create: cartCreate });
  } catch ({ message }) {
    console.log("MSG ERR=> ", message);
    return res.status(400).send({ message });
  }
}
