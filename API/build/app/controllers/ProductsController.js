"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProductStock = exports.paginateProducts = exports.retrieveProduct = exports.deleteProduct = exports.updateProduct = exports.postProduct = exports.getProductById = exports.bulk = exports.getProducts = void 0;
const utils_1 = require("../utils");
const bluebird_1 = require("bluebird");
// Data base context import
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
// import { where } from 'sequelize';
const sequelize_1 = require("sequelize");
// Models
const Products = ConnectionDB_1.default.models.products;
const Categories = ConnectionDB_1.default.models.categories;
const Images = ConnectionDB_1.default.models.images;
const Users = ConnectionDB_1.default.models.users;
const Roles = ConnectionDB_1.default.models.roles;
const OrderBuy = ConnectionDB_1.default.models.orderBuy;
const ProductOrder = ConnectionDB_1.default.models.productOrder;
const Properties = ConnectionDB_1.default.models.products_properties;
const Ratings = ConnectionDB_1.default.models.ratings;
function getProducts(req, res) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        /*
          Querys:
          state = true or false
          category = Category we need to filter the products: Shoes, Phones, etc.
        */
        try {
            if (((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) &&
                ((_b = req.query) === null || _b === void 0 ? void 0 : _b.quantityProducts) &&
                ((_c = req.query) === null || _c === void 0 ? void 0 : _c.data) &&
                ((_d = req.query) === null || _d === void 0 ? void 0 : _d.order)) {
                const page = parseInt(req.query.page.toString());
                const quantityProducts = parseInt(req.query.quantityProducts.toString());
                const data = req.query.data.toString();
                const order = req.query.order.toString();
                if (page && quantityProducts) {
                    if (page < 1 && quantityProducts < 1)
                        throw new Error('The fields can only be greater than 0!');
                    const { category, name } = req.query;
                    const nameLow = name === null || name === void 0 ? void 0 : name.toString().toLowerCase();
                    console.log(nameLow, 'nameLow');
                    const result = yield Products.findAll({
                        where: {
                            name: {
                                [sequelize_1.Op.substring]: nameLow,
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
                        order: [[data, order]],
                    });
                    const productsAll = yield Products.count({
                        where: {
                            name: {
                                [sequelize_1.Op.substring]: nameLow,
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
        }
        catch ({ message }) {
            console.log('ERROR MSG => ', message);
            return res.status(400).send({ message });
        }
    });
}
exports.getProducts = getProducts;
function bulk(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Roles.bulkCreate(utils_1.roles);
            yield Categories.bulkCreate(utils_1.category);
            yield Users.bulkCreate(utils_1.usersData);
            yield Products.bulkCreate(utils_1.data, {
                include: [
                    { model: Images, as: 'images' },
                    { model: Properties, as: 'properties' },
                    { model: Ratings, as: 'ratings' },
                ],
            });
            yield OrderBuy.bulkCreate(utils_1.ordenBuyArray, {
                include: [{ model: ProductOrder }, { model: Products }],
            });
            return res.status(200).json({ message: 'Datos harcodeados' });
        }
        catch ({ message }) {
            console.log('MSG ERR => ', message);
            return res.status(400).send({ message });
        }
    });
}
exports.bulk = bulk;
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield Products.findByPk(id, {
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
                    {
                        model: Ratings,
                        attributes: { exclude: ['updatedAt'] },
                    },
                ],
                attributes: { exclude: ['categoryId'] },
            });
            if (!result)
                return res.status(404).send({ message: 'Product not found!' });
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getProductById = getProductById;
// export async function postProduct(req: Request, res: Response) {
//   try {
//     const product = req.body;
//     let result = await Products.create(product, {
//        include: {
//         model: Properties,
//         as: 'properties',
//       },
//     });
// return res.send(result);
// } catch ({ message }) {
//   console.log(message);
//   return res.status(400).send({ message });
// }
// }
function postProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = req.body;
            let result = yield Products.create(product, {
                include: [
                    {
                        model: Categories,
                        // as: 'categories'
                    },
                    {
                        model: Properties,
                        as: 'properties',
                    },
                    {
                        model: Images,
                    },
                ],
            });
            return res.send(result);
        }
        catch ({ message }) {
            console.log(message);
            return res.status(400).send({ message });
        }
    });
}
exports.postProduct = postProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const newFields = req.body;
            const prop = newFields.properties;
            const imgs = newFields.images;
            var productToUpdate = yield Products.findByPk(id, {
                include: [
                    {
                        model: Properties,
                        as: 'properties',
                    },
                    {
                        model: Images,
                    },
                ],
            });
            if (productToUpdate) {
                const { dataValues } = productToUpdate;
                const { images } = dataValues;
                yield productToUpdate.update(newFields, { include: [Properties] });
                yield productToUpdate.save();
                prop.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    const propFind = yield Properties.findByPk(e.id);
                    if (propFind) {
                        yield propFind.update({ name: e.name, value: e.value });
                        yield propFind.save();
                    }
                }));
                yield bluebird_1.Promise.map(images, (img) => img.destroy());
                yield bluebird_1.Promise.map(imgs, (img) => Images.create(Object.assign(Object.assign({}, img), { productId: dataValues.id })));
                return res.send(yield Products.findByPk(id, {
                    include: [
                        {
                            model: Properties,
                            as: 'properties',
                        },
                        {
                            model: Images,
                        },
                    ],
                }));
            }
            else
                return res.status(404).send({ message: 'Product no found!' });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productToDelete = yield Products.findByPk(id);
            if (productToDelete) {
                yield productToDelete.update({ state: false });
                yield productToDelete.save();
            }
            else
                return res.status(404).send({ message: 'Product not found!' });
            return res.send({ message: 'Product has been discharged!' });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.deleteProduct = deleteProduct;
function retrieveProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productToUpdate = yield Products.findByPk(id);
            if (productToUpdate) {
                yield productToUpdate.update({ state: true });
                yield productToUpdate.save();
            }
            else
                return res.status(404).send({ message: 'Product not found!' });
            return res.send({ message: 'Product has been discharged!' });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.retrieveProduct = retrieveProduct;
/*
order : ASC | DESC
data : id | price | discount
*/
function paginateProducts(req, res) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        /*
          Querys:
          page = The number of page that we need to bring: 1, 2 , 3,etc.
          quantityProducts = Quantity of product that we need per page: 10, 15, 20, etc.
          category = Category we need to filter the products: Shoes, Phones, etc.
        */
        try {
            if (((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) &&
                ((_b = req.query) === null || _b === void 0 ? void 0 : _b.quantityProducts) &&
                ((_c = req.query) === null || _c === void 0 ? void 0 : _c.discount) &&
                ((_d = req.query) === null || _d === void 0 ? void 0 : _d.data) &&
                ((_e = req.query) === null || _e === void 0 ? void 0 : _e.order)) {
                const page = parseInt(req.query.page.toString());
                const quantityProducts = parseInt(req.query.quantityProducts.toString());
                const discount = parseInt(req.query.discount.toString());
                const data = req.query.data.toString();
                const order = req.query.order.toString();
                if (page && quantityProducts) {
                    if (page < 1 && quantityProducts < 1)
                        throw new Error('The fields can only be greater than 0!');
                    const { category, price, name } = req.query;
                    const nameLow = name === null || name === void 0 ? void 0 : name.toString().toLowerCase();
                    const result = yield Products.findAll({
                        where: {
                            state: true,
                            discount: {
                                [sequelize_1.Op.gte]: discount,
                            },
                            price: {
                                [sequelize_1.Op.gte]: price,
                            },
                            name: {
                                [sequelize_1.Op.substring]: `${nameLow}`,
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
                        order: [[data, order]],
                    });
                    const productsAll = yield Products.count({
                        where: {
                            state: true,
                            discount: {
                                [sequelize_1.Op.gte]: discount,
                            },
                            price: {
                                [sequelize_1.Op.gte]: price,
                            },
                            name: {
                                [sequelize_1.Op.substring]: `${nameLow}`,
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
        }
        catch ({ message }) {
            console.log('ERROR MSG => ', message);
            return res.status(400).send({ message });
        }
    });
}
exports.paginateProducts = paginateProducts;
// http://localhost:3001/products/paginate?page=1&quantityProducts=4&category=camaras y lentes&discount=5&price=0&data=id&order=ASC&name=''
function setProductStock(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = +req.params.id;
            const quantity = +req.body.quantity;
            const productToUpdate = yield Products.findByPk(id);
            if (!productToUpdate)
                return res.json({ message: 'Product No existe' });
            const stock = +productToUpdate.dataValues.stock;
            yield productToUpdate.update({ stock: stock - quantity });
            yield productToUpdate.save();
            return res.json(productToUpdate);
        }
        catch ({ message }) {
            return res.status(400).json({ message });
        }
    });
}
exports.setProductStock = setProductStock;
