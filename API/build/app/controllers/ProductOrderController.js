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
exports.postProductsOrder = exports.getProductsOrderById = exports.getProductsOrder = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const ProductsOrder = ConnectionDB_1.default.models.productOrder;
const Products = ConnectionDB_1.default.models.Product;
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
        });
        return res.json({ message: 'post orderproduct.', createOrderProduct });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.postProductsOrder = postProductsOrder;
