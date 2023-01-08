import DBcontext from '../../config/ConnectionDB';
import {
  TypeFunctionExp,
  ProductOrderIfc,
  ProductOrderCartIfc,
} from '../interfaces-type';
import { Model } from 'sequelize';
const ProductsOrder = DBcontext.models.productOrder;
const Products = DBcontext.models.Product;

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

    const productOrderCartCreate = await ProductsOrder.create({
      productId,
      quantity,
      price,
      userId,
    });
    return res.json({
      message: 'POST All Product Order CART.',
      productOrderCartCreate,
    });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

export const deleteProductsOrderCart: TypeFunctionExp = async (req, res) => {
  try {
    const id: number = +req.params.id;
    const productOrderCart = await ProductsOrder.findByPk(id);

    if (!productOrderCart) return res.json({ message: 'Product Order existe' });

    const quantity: number = +productOrderCart.dataValues.quantity;

    if (quantity === 0) {
      await ProductsOrder.destroy({ where: { id } });
      return res.json({ msj: 'Delete Product order Cart' });
    }
    await productOrderCart.update({ quantity: quantity - 1 });
    await productOrderCart.save();

    return res.json({ msj: 'Delete Product order Cart 1' });
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
};

// DELETE

//  productId: 1,
//  quantity: 10,
//  price: 1200000 * 10,
//  userId
