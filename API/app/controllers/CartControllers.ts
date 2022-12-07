import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { cartBuy } = DBcontext.models;

export async function getCart(req: Request, res: Response) {
  const { id } = req.body;
  try {
    console.log(id);

    //   const carts = await cartBuy.findByPk(id, { include: Users });
    const carts = await cartBuy.findAll();
    //   const carts = await cartBuy.findAll({ include: users });

    return res.json({ message: "Get Carts", carts });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

// const actividadCreate = await Turistas.create(req.body);
// console.log(actividadCreate.__proto__);
export async function postCart(req: Request, res: Response) {
  try {
    const { priceTotal } = req.body;
    console.log(priceTotal);

    const cart1 = { priceTotal: 10 };
    // const cart2 = { priceTotal: 20 };
    // const cart3 = { priceTotal: 30 };

    // const cartUno = await cartBuy.create(cart1);
    // const cartDos = await cartBuy.create(cart2);
    //   const cartTres = await cartBuy.create(cart3);
    await cartBuy.create(cart1);
    // await cartBuy.create(cart2);
    // await cartBuy.create(cart3);

    // console.log("CREATE 1 =>", cartUno);
    // console.log("CREATE 2 =>", cartDos);
    // console.log("CREATE 3 =>", cartTres);

    return res.send({ message: "Post cart", msg: "Creados 3 carts" });
  } catch ({ message }) {
    console.log("MSG ERR=> ", message);
    return res.status(400).send({ message });
  }
}
