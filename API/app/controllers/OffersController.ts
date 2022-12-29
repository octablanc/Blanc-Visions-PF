import { Request, Response } from "express";

// Data base context import
import DBcontext from "../../config/ConnectionDB";

// Models
const Offers = DBcontext.models.offers;

export async function getOffers(_req: Request, res: Response) {
  try {
    const result = await Offers.findAll();
    return res.send(result);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postOffers(req: Request, res: Response) {
  try {
    const offers = req.body;

    let result = await Offers.create(offers);
    return res.send(result);
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function updateOfers(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const newFields = req.body;

    const offersUpdate = await Offers.findByPk(id);
    if (offersUpdate) {
      await offersUpdate.update(newFields);
      await offersUpdate.save();
    } else return res.status(404).send({ message: "Offert no found!" });

    return res.send(offersUpdate);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function deleteOffers(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const offersDelete = await Offers.findByPk(id);
    if (offersDelete) {
      await offersDelete.update({ state: false });
      await offersDelete.save();
    } else return res.status(404).send({ message: "Product not found!" });

    return res.send({ message: "Offers has been discharged!" });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}
