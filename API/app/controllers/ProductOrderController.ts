import DBcontext from '../../config/ConnectionDB';
import {
  TypeFunctionExp,
  ProductOrderIfc,
  ProductOrderCartIfc,
} from '../interfaces-type';
import { Model } from 'sequelize';
const ProductsOrder = DBcontext.models.productOrder;
const Products = DBcontext.models.products;

export const getProductsOrder: TypeFunctionExp = async (_req, res) => {
  try {
    const allProductsOrders: Array<Model> = await ProductsOrder.findAll({
      include: Products,
    });

    return res.json({ message: 'Get All Product Order.', allProductsOrders });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

export const getProductsOrderById: TypeFunctionExp = async (req, res) => {
  const id: number = +req.params.id;
  try {
    const productOrdersFind: Array<Model> = await ProductsOrder.findAll({
      where: {
        productId: id,
      },
    });

    return res.json({ message: 'Get Producst Order ID.', productOrdersFind });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

export const postProductsOrder: TypeFunctionExp = async (req, res) => {
  const { productId, quantity, price }: ProductOrderIfc = req.body;
  try {
    const createOrderProduct: Model = await ProductsOrder.create(
      { productId, quantity, price },
      {
        include: Products, 
        //habria que hacer la lógica para que descuente el stock del producto?? 
      }
    );
    return res.json({ message: 'post orderproduct.', createOrderProduct });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

// * -  - - - - - - - - - - - - - - - - - - - - - - - -
// * -  - - - - - - - - - - - - - - - - - - - - - - - -
// * -  - - - - - - - - - - - - - - - - - - - - - - - -

export const getProductsOrderUser: TypeFunctionExp = async (req, res) => {
  try {
    const userId: number = +req.params.id;
    const productsOrderUser = await ProductsOrder.findAll({
      where: { userId },
      include: [
        {
          model: Products,
          attributes: {
            exclude: [
              'code',
              'description',
              'state',
              'createdAt',
              'updatedAt',
              'categoryId',
              'offerId',
            ],
          },
        },
      ],
      attributes: { exclude: ['orderBuyId', 'userId'] },
      order: [['id', 'ASC']],
    });

    return res.json({
      message: 'Get All Product Order User.',
      productsOrderUser,
    });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

export const postProductsOrderCart: TypeFunctionExp = async (req, res) => {
  try {
    const { productId, quantity, price, userId }: ProductOrderCartIfc =
      req.body;
    await ProductsOrder.create({ productId, quantity, price, userId });
    return res.json({
      message: 'POST All Product Order CART.',
    });
  } catch ({ message }) {
    console.log('err msj =>', message);
    return res.status(400).send({ message });
  }
};

export const deleteProductsOrderCart: TypeFunctionExp = async (req, res) => {
  try {
    const id: number = +req.params.id;
    await ProductsOrder.destroy({ where: { id } });
    return res.json({ msj: `Delete Product order Cart =>${id}` });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};
export const setQuantityProductsOrderCart: TypeFunctionExp = async (
  req,
  res
) => {
  try {
    const id: number = +req.params.id;
    const { quantity } = req.body;
    const cartUser = await ProductsOrder.findByPk(id);
    const productData = await Products.findByPk(cartUser?.dataValues.productId);
    console.log({ quantity });
    const newPrice =
      productData?.dataValues.discount === 0
        ? productData.dataValues.price * quantity
        : (productData?.dataValues.price -
            (productData?.dataValues.price * productData?.dataValues.discount) /
              100) *
          quantity;
    console.log({ newPrice });
    await cartUser?.update({ quantity, price: newPrice });
    await cartUser?.save();

    return res.json({ msj: `set quantity cart User =>${id}` });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

export const deleteCartUser: TypeFunctionExp = async (req, res) => {
  try {
    const id: number = +req.params.id;
    await ProductsOrder.destroy({ where: { userId: id } });
    return res.json({ msj: `Delete Cart User =>${id}` });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

//  productId: 1,
//  quantity: 10,
//  price: 1200000 * 10,
//  userId
