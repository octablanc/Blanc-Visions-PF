import DBcontext from '../../config/ConnectionDB'
import { TypeFunctionExp, ProductOrderIfc } from '../interfaces-type'
import { Model } from 'sequelize'
const ProductsOrder = DBcontext.models.productOrder
const Products = DBcontext.models.Product

export const getProductsOrder: TypeFunctionExp = async (_req, res) => {
  try {
    const allProductsOrders: Array<Model> = await ProductsOrder.findAll({
      include: Products,
    })

    return res.json({ message: 'Get All Product Order.', allProductsOrders })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const getProductsOrderById: TypeFunctionExp = async (req, res) => {
  const id: number = +req.params.id
  try {
    const productOrdersFind: Array<Model> = await ProductsOrder.findAll({
      where: {
        productId: id,
      },
    })

    return res.json({ message: 'Get Producst Order ID.', productOrdersFind })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const postProductsOrder: TypeFunctionExp = async (req, res) => {
  const { productId, quantity, price }: ProductOrderIfc = req.body
  try {
    const createOrderProduct: Model = await ProductsOrder.create(
      { productId, quantity, price },
      {
        include: Products, 
        //habria que hacer la lógica para que descuente el stock del producto?? 
      }
    )
    return res.json({ message: 'post orderproduct.', createOrderProduct })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}
