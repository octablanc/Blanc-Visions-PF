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
exports.postOrderBuy = exports.setOrderBuy = exports.getCartUser = exports.getOrderBuyUserId = exports.getOrderBuy = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const orderBuy = ConnectionDB_1.default.models.orderBuy;
const ProductOrder = ConnectionDB_1.default.models.productOrder;
const Products = ConnectionDB_1.default.models.products;
const getOrderBuy = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield orderBuy.findAll({
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
        });
        return res.json({ message: 'ORDER BUY .', all });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getOrderBuy = getOrderBuy;
const getOrderBuyUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = +req.params.userId;
    try {
        const ordenBuyUser = yield orderBuy.findAll({
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
        });
        return res.json({ message: 'ORDER BUY .', ordenBuyUser });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getOrderBuyUserId = getOrderBuyUserId;
const getCartUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = +req.params;
    try {
        const ordenBuyUser = yield orderBuy.findAll({
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
        });
        return res.json({ message: 'ORDER BUY .', ordenBuyUser });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getCartUser = getCartUser;
const setOrderBuy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const orderBuyId = yield orderBuy.findByPk(id);
        yield (orderBuyId === null || orderBuyId === void 0 ? void 0 : orderBuyId.update({ buy: true }));
        yield (orderBuyId === null || orderBuyId === void 0 ? void 0 : orderBuyId.save());
        return res.json({ message: 'ORDER BUY .' });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.setOrderBuy = setOrderBuy;
const postOrderBuy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { priceTotalDiscount, discount, state, postalCode, street, height, city, dues, userId, buy, productOrders, } = req.body;
    try {
        const orderBuyCreate = yield orderBuy.create({
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
        }, { include: [{ model: ProductOrder }, { model: Products }] });
        return res.json({ message: 'ORDER BUY .', orderBuyCreate });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.postOrderBuy = postOrderBuy;
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
