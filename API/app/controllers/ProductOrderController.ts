import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const ProductsOrder = DBcontext.models.productOrder;

export async function getProductsOrder(_req: Request, res: Response) {
  try {
    const all = await ProductsOrder.findAll();

    return res.json({ message: "prodcuto oprder.", all });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function postProductsOrder(req: Request, res: Response) {
    try {
        const createOrderProduct = await ProductsOrder.create(req.body);
    return res.json({ message: "post oprderprodict.", createOrderProduct});
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}
