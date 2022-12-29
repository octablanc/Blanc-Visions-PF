import DBcontext from '../../config/ConnectionDB'
import { TypeFunctionExp, OrderBuyIfc } from '../interfaces-type'
import { Model } from 'sequelize'

const orderBuy = DBcontext.models.orderBuy
const ProductOrder = DBcontext.models.productOrder
const Products = DBcontext.models.products

export const getOrderBuy: TypeFunctionExp = async (_req, res) => {
  try {
    const all: Array<Model> = await orderBuy.findAll({
      include: [
        {
          model: ProductOrder,
          include: [
            {
              model: Products,
              attributes: ['id', 'name', 'image'],
            },
          ],
          attributes: ['quantity', 'price'],
        },
      ],
      attributes: ['userId', 'id', 'priceTotalDiscount'],
    })
    return res.json({ message: 'ORDER BUY .', all })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const getOrderBuyUserId: TypeFunctionExp = async (req, res) => {
  const userId: number = +req.params.userId
  try {
    const ordenBuyUser: Array<Model> = await orderBuy.findAll({
      where: { userId, buy: true },
      include: [
        {
          model: ProductOrder,
          include: [{ model: Products, attributes: ['id', 'name', 'image'] }],
          attributes: ['id', 'quantity', 'price'],
        },
      ],
      attributes: [
        'id',
        'priceTotalDiscount',
        'buy',
        'createdAt',
        'street',
        'height',
        'city',
      ],
    })

    return res.json({ message: 'ORDER BUY .', ordenBuyUser })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const getCartUser: TypeFunctionExp = async (req, res) => {
  const userId: number = +req.params
  try {
    const ordenBuyUser: Array<Model> = await orderBuy.findAll({
      where: { userId, buy: false },
      include: [
        {
          model: ProductOrder,
          include: [
            {
              model: Products,
              attributes: ['id', 'name', 'image'],
            },
          ],
          attributes: ['quantity', 'price'],
        },
      ],
      attributes: ['id', 'priceTotalDiscount', 'buy'],
    })

    return res.json({ message: 'ORDER BUY .', ordenBuyUser })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const setOrderBuy: TypeFunctionExp = async (req, res) => {
  const id: number = +req.params.id
  try {
    const orderBuyId: Model | null = await orderBuy.findByPk(id)

    await orderBuyId?.update({ buy: true })
    await orderBuyId?.save()

    return res.json({ message: 'ORDER BUY .' })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

export const postOrderBuy: TypeFunctionExp = async (req, res) => {
  const {
    priceTotalDiscount,
    discount,
    state,
    postalCode,
    street,
    height,
    city,
    dues,
    userId,
    buy,
    productOrders,
  }: OrderBuyIfc = req.body
  try {
    const orderBuyCreate: Model = await orderBuy.create(
      {
        priceTotalDiscount,
        discount,
        state,
        postalCode,
        street,
        height,
        city,
        dues,
        userId,
        buy,
        productOrders,
      },
      { include: [{ model: ProductOrder }, { model: Products }] }
    )
    return res.json({ message: 'ORDER BUY .', orderBuyCreate })
  } catch ({ message }) {
    console.log(message)
    return res.status(400).send({ message })
  }
}

// {
//   "priceTotalDiscount":12390321,
//   "discount": 20123,
//   "state": true,
//   "postalCode": 112399,
//   "street": "otra",
//   "height": "2318493",
//   "city": "bninon",
//   "dues": 130432432,
//   "userId": 2,
//   "buy": false,
//   "productOrders": [
//     {
//       "productId": 2,
//       "quantity": 12,
//       "price": 1000
//     }
//   ]
// }

// User.findAll({
//   include: [
//     {
//       model: Grant,
//       include: [User, Profile]
//     },
//     {
//       model: Profile,
//       include: {
//         model: User,
//         include: {
//           model: Grant,
//           include: [User, Profile]
//         }
//       }
//     }
//   ]
// });
