import { Request, Response } from 'express';
import { category, data, usersData, roles, ordenBuyArray } from '../utils';

// Data base context import
import DBcontext from '../../config/ConnectionDB';
// import { where } from 'sequelize';
import { Op } from 'sequelize';

// Models
const Products = DBcontext.models.products;
const Categories = DBcontext.models.categories;
const Images = DBcontext.models.images;
const Users = DBcontext.models.users;
const Roles = DBcontext.models.roles;

const OrderBuy = DBcontext.models.orderBuy;
const ProductOrder = DBcontext.models.productOrder;

const Properties = DBcontext.models.products_properties;

export async function getProducts(req: Request, res: Response) {
  /*
    Querys: 
    state = true or false
    category = Category we need to filter the products: Shoes, Phones, etc.
  */
  try {
    const { state, category } = req.query;

    const result = await Products.findAll({
      where:
        state === 'false'
          ? { state: false }
          : state === 'true'
          ? { state: true }
          : undefined,
      include: [
        {
          model: Categories,
          where: category
            ? {
                name: category,
              }
            : undefined,
        },
        {
          model: Properties,
          as: 'properties',
        },
        {
          model: Images,
        },
      ],
      attributes: { exclude: ['categoryId'] },
      order: [['id', 'ASC']],
    });

    return res.send(result);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function bulk(_req: Request, res: Response) {
  try {
    await Roles.bulkCreate(roles);
    await Categories.bulkCreate(category);
    await Products.bulkCreate(data, {
      include: [
        { model: Images, as: 'images' },
        { model: Properties, as: 'properties' },
      ],
    });
    await Users.bulkCreate(usersData);

    await OrderBuy.bulkCreate(ordenBuyArray, {
      include: [{ model: ProductOrder }, { model: Products }],
    });
    return res.status(200).json({ message: 'Datos harcodeados' });
  } catch ({ message }) {
    console.log('MSG ERR => ', message);
    return res.status(400).send({ message });
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const result = await Products.findByPk(id, {
      include: [
        {
          model: Categories,
        },
        {
          model: Properties,
          as: 'properties',
        },
        {
          model: Images,
        },
      ],
      attributes: { exclude: ['categoryId'] },
    });

    if (!result) return res.status(404).send({ message: 'Product not found!' });

    return res.send(result);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function postProduct(req: Request, res: Response) {
  try {
    const product = req.body;

    let result = await Products.create(product, {
      include: {
        model: Properties,
        as: 'properties',
      },
    });

    return res.send(result);
  } catch ({ message }) {
    console.log(message);
    return res.status(400).send({ message });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const newFields = req.body;

    const productToUpdate = await Products.findByPk(id, {
      include: {
        model: Properties,
        as: 'properties',
      },
    });
    if (productToUpdate) {
      await productToUpdate.update(newFields);
      await productToUpdate.save();
    } else return res.status(404).send({ message: 'Product no found!' });

    return res.send(productToUpdate);
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const productToDelete = await Products.findByPk(id);
    if (productToDelete) {
      await productToDelete.update({ state: false });
      await productToDelete.save();
    } else return res.status(404).send({ message: 'Product not found!' });

    return res.send({ message: 'Product has been discharged!' });
  } catch ({ message }) {
    return res.status(400).send({ message });
  }
}

export async function paginateProducts(req: Request, res: Response) {
  /*
    Querys: 
    page = The number of page that we need to bring: 1, 2 , 3,etc.
    quantityProducts = Quantity of product that we need per page: 10, 15, 20, etc.
    category = Category we need to filter the products: Shoes, Phones, etc.
  */
  try {
    if (req.query?.page && req.query?.quantityProducts && req.query?.discount) {
      const page = parseInt(req.query.page.toString());
      const quantityProducts = parseInt(req.query.quantityProducts.toString());
      const discount = parseInt(req.query.discount.toString());
      if (page && quantityProducts) {
        if (page < 1 && quantityProducts < 1)
          throw new Error('The fields can only be greater than 0!');

        const { category } = req.query;
        const { price } = req.query;
        // let newPrice = price?.replace(/[$.]/g,'');

        const result = await Products.findAll({
          where: {
            state: true,
            discount: {
              [Op.gte]: discount,
            },
            price: {
              [Op.gte]: price,
            },
          },
          include: [
            {
              model: Categories,
              where: category
                ? {
                    name: category,
                  }
                : undefined,
            },
            {
              model: Properties,
              as: 'properties',
            },
          ],
          attributes: { exclude: ['categoryId'] },
          offset: quantityProducts * (page - 1),
          limit: quantityProducts,
          order: [['id', 'ASC']],
        });

        const productsAll = await Products.count({
          where: {
            state: true,
            discount: {
              [Op.gte]: discount,
            },
            price: {
              [Op.gte]: price,
            },
          },
          include: [
            {
              model: Categories,
              where: category ? { name: category } : undefined,
            },
          ],
          attributes: { exclude: ['categoryId'] },
        });
        return res.json({ result, productsLength: productsAll });
      }
      throw new Error('The fields can only be numbers!');
    }
    throw new Error('Some filed is empty!');
  } catch ({ message }) {
    console.log('ERROR MSG => ', message);
    return res.status(400).send({ message });
  }
}
// http://localhost:3001/products/paginate?page=1&quantityProducts=4&category=camaras y lentes&discount=5
