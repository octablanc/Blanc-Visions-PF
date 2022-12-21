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



// {
//   calle: 'jfdksaf'
//  descento: 1203,
//   products: [
//     {
//       userId: 1
//       productId: 1,
//       quantity: 19,
//     },
//     {
//       userId: 1
//       productId: 2,
//       quantity: 19,
//     }
//   ]
// }