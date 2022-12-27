import { Request, Response } from "express";
import DBcontext from "../../config/ConnectionDB";

const orderBuy = DBcontext.models.orderBuy;
const ProductOrder = DBcontext.models.productOrder;
const Products= DBcontext.models.products;




export async function getOrderBuy(_req: Request, res: Response) {
    try {
      const all = await orderBuy.findAll({
        include: [
          {
            model: ProductOrder,
            include: [{
              model: Products,
              attributes: ['id','name','image']
            }],
            attributes: ['quantity','price']
          },
        ],
        attributes: ['userId','id','priceTotalDiscount']
      });
    return res.json({ message: "ORDER BUY .",all });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function getOrderBuyUserId(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const ordenBuyUser = await orderBuy.findAll({
      where:{userId,buy:true},
      include: [
        {
          model: ProductOrder,
          include: [{
            model: Products,
            attributes: ['id','name','image']
          }],
          attributes: ['quantity','price']
        },
      ],
      attributes: ['id','priceTotalDiscount','buy','createdAt']
    });
    
    return res.json({ message: "ORDER BUY .",ordenBuyUser });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function getCartUser(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const ordenBuyUser = await orderBuy.findAll({
      where:{userId,buy:false},
      include: [
        {
          model: ProductOrder,
          include: [{
            model: Products,
            attributes: ['id','name','image']
          }],
          attributes: ['quantity','price']
        },
      ],
      attributes: ['id','priceTotalDiscount','buy']
    });
    
    return res.json({ message: "ORDER BUY .",ordenBuyUser });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function setOrderBuy(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const orderBuyId = await orderBuy.findByPk(id);

    await orderBuyId?.update({ buy: true });
    await orderBuyId?.save();


    return res.json({ message: "ORDER BUY ." });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}


export async function postOrderBuy(req: Request, res: Response) {
  const { priceTotalDiscount, discount, state, postalCode, street, height, city, dues, userId, buy, productOrders } = req.body;
  try {
    
    const orderBuyCreate = await orderBuy.create({priceTotalDiscount, discount,state,postalCode,street,height,city,dues,userId,buy,productOrders},
      { include: [{ model: ProductOrder }, { model: Products },] });
    return res.json({ message: "ORDER BUY .",orderBuyCreate });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
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