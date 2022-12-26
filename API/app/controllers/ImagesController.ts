import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";
const { images } = DBcontext.models;
// Model
/*
{
  url_image: "https://http2.mlstatic.com/D_NQ_NP_979408-MLA42843661201_072020-O.webp",
  state: true,
  productId: 1,
}*/

export async function postImages(req: Request, res: Response) {
  try {
    const imageCreate = await images.create(req.body);
    return res.json({ message: "Imagenes agregadas.", imageCreate });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function deleteImages(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await images.destroy({ where: { id } });
    return res.json({ message: "images has been discharged!" });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function getImageByPk(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const imageByPk = await images.findByPk(id);
    return res.json(imageByPk);
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}