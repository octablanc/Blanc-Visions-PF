import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const orderBuy  = DBcontext.models.orderBuy;

export async function getOrderBuy(_req: Request, res: Response) {
    try {
        const all = await orderBuy.findAll();
    return res.json({ message: "ORDER BUY .",all });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}
