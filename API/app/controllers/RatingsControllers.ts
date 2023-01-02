import DBcontext from '../../config/ConnectionDB';
import { RatingIfc, TypeFunctionExp } from '../interfaces-type';

const Ratings = DBcontext.models.ratings;
const User = DBcontext.models.user;

export const getRatings: TypeFunctionExp = async (_req, res) => {
  try {
    const result = await Ratings.findAll({ include: User });
    return res.send({ result });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

export const postRating: TypeFunctionExp = async (req, res) => {
  try {
    const { score, commentary, productId, createdAt }: RatingIfc = req.body;
    const RatingCreated = await Ratings.create({
      score,
      commentary,
      productId,
      createdAt,
    });
    return res.send({ RatingCreated });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};

export const deleteRating: TypeFunctionExp = async (req, res) => {
  try {
    const id: number = +req.params.id;

    const deleted: number = await Ratings.destroy({ where: { id } });
      return res.send({
          message: deleted
              ? `comentario eliminado con exito. id => ${id}`
              : `No se pudo encontrar el comentario con el ID ${id}`
            });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
};
