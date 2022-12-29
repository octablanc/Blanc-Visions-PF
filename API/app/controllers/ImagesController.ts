import DBcontext from '../../config/ConnectionDB'
const { images } = DBcontext.models
import { Model } from 'sequelize'
import { TypeFunctionExp } from '../interfaces-type/index'
// Model
/*
{ url_image: "https://http2.mlstatic.com/D_NQ_NP_979408-MLA42843661201_072020-O.webp", }*/

export const postImages: TypeFunctionExp = async (req, res) => {
  const url_image: string = req.body.url_image
  try {
    const imageCreate: Model = await images.create({ url_image })
    return res.json({ message: 'Imagenes agregadas.', imageCreate })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const deleteImages: TypeFunctionExp = async (req, res) => {
  const id: number = +req.params.id
  try {
    const deleteImg: number = await images.destroy({ where: { id } })

    return res.json({
      message: deleteImg
        ? 'the image has been deleted successfully'
        : 'Could not delete image because it does not exist',
    })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const getImageByPk: TypeFunctionExp = async (req, res) => {
  const id: number = +req.params.id
  try {
    const imageByPk: Model | null = await images.findByPk(id)
    return res.json(imageByPk ?? { message: 'Image not found' })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}
