import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { cartBuy, Users } = DBcontext.models;

export async function getCart(req: Request, res: Response) {
  const { id } = req.body;
  try {
    console.log(id);

    //   const carts = await cartBuy.findByPk(id, { include: Users });
    const carts = await cartBuy.findAll({ include: Users });
    return res.json({ message: "Get Carts", carts });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postCart(req: Request, res: Response) {
  try {
    const { priceTotal } = req.body;

      const cart = await cartBuy.create({ priceTotal });
    console.log(cart);
    
    //   Relacion
    //   console.log(cart.__proto__);
      
    // const actividadCreate = await Turistas.create(req.body);
    // console.log(actividadCreate.__proto__);
      
    //   const cart = await cartBuy.create({ priceTotal: priceTotal2 });
    //   console.log(cart);
    //   console.log(cart.__proto__);


    // await cart.();

    return res.send({ message: "Post cart", priceTotal });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}
