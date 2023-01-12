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
exports.deleteCartUser = exports.setQuantityProductsOrderCart = exports.deleteProductsOrderCart = exports.postProductsOrderCart = exports.getProductsOrderUser = exports.postProductsOrder = exports.getProductsOrderById = exports.getProductsOrder = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const ProductsOrder = ConnectionDB_1.default.models.productOrder;
const Products = ConnectionDB_1.default.models.products;
const getProductsOrder = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProductsOrders = yield ProductsOrder.findAll({
            include: Products,
        });
        return res.json({ message: 'Get All Product Order.', allProductsOrders });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getProductsOrder = getProductsOrder;
const getProductsOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const productOrdersFind = yield ProductsOrder.findAll({
            where: {
                productId: id,
            },
        });
        return res.json({ message: 'Get Producst Order ID.', productOrdersFind });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getProductsOrderById = getProductsOrderById;
const postProductsOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity, price } = req.body;
    try {
        const createOrderProduct = yield ProductsOrder.create({ productId, quantity, price }, {
            include: Products,
            //habria que hacer la lógica para que descuente el stock del producto?? 
        });
        return res.json({ message: 'post orderproduct.', createOrderProduct });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.postProductsOrder = postProductsOrder;
// * -  - - - - - - - - - - - - - - - - - - - - - - - -
// * -  - - - - - - - - - - - - - - - - - - - - - - - -
// * -  - - - - - - - - - - - - - - - - - - - - - - - -
const getProductsOrderUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.id;
        const productsOrderUser = yield ProductsOrder.findAll({
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
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getProductsOrderUser = getProductsOrderUser;
const postProductsOrderCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, quantity, price, userId } = req.body;
        yield ProductsOrder.create({ productId, quantity, price, userId });
        return res.json({
            message: 'POST All Product Order CART.',
        });
    }
    catch ({ message }) {
        console.log('err msj =>', message);
        return res.status(400).send({ message });
    }
});
exports.postProductsOrderCart = postProductsOrderCart;
const deleteProductsOrderCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        yield ProductsOrder.destroy({ where: { id } });
        return res.json({ msj: `Delete Product order Cart =>${id}` });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.deleteProductsOrderCart = deleteProductsOrderCart;
const setQuantityProductsOrderCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const { quantity } = req.body;
        const cartUser = yield ProductsOrder.findByPk(id);
        const productData = yield Products.findByPk(cartUser === null || cartUser === void 0 ? void 0 : cartUser.dataValues.productId);
        console.log({ quantity });
        const newPrice = (productData === null || productData === void 0 ? void 0 : productData.dataValues.discount) === 0
            ? productData.dataValues.price * quantity
            : ((productData === null || productData === void 0 ? void 0 : productData.dataValues.price) -
                ((productData === null || productData === void 0 ? void 0 : productData.dataValues.price) * (productData === null || productData === void 0 ? void 0 : productData.dataValues.discount)) /
                    100) *
                quantity;
        console.log({ newPrice });
        yield (cartUser === null || cartUser === void 0 ? void 0 : cartUser.update({ quantity, price: newPrice }));
        yield (cartUser === null || cartUser === void 0 ? void 0 : cartUser.save());
        return res.json({ msj: `set quantity cart User =>${id}` });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.setQuantityProductsOrderCart = setQuantityProductsOrderCart;
const deleteCartUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        yield ProductsOrder.destroy({ where: { userId: id } });
        return res.json({ msj: `Delete Cart User =>${id}` });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.deleteCartUser = deleteCartUser;
//  productId: 1,
//  quantity: 10,
//  price: 1200000 * 10,
//  userId
