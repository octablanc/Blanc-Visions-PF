import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const ProductsOrder = DBcontext.models.productOrder;
const Products = DBcontext.models.Product;


export async function getProductsOrder(_req: Request, res: Response) {
  try {
    const all = await ProductsOrder.findAll({ include: Products });
    

    return res.json({ message: "prodcuto oprder.", all });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function getProductsOrderById(req: Request, res: Response) {
  try {
    // const pk = await ProductsOrder.findByPk(req.params.id, { include: Product });
    const pk = await ProductsOrder.findAll({
      where: {
        productsId: req.params.id,
      }});
    

    return res.json({ message: "prodcuto oprder.", pk });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function postProductsOrder(req: Request, res: Response) {
    try {
        const createOrderProduct = await ProductsOrder.create(req.body, {include:Products});
    return res.json({ message: "post oprderprodict.", createOrderProduct});
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}
