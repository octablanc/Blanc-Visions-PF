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
exports.postCart = exports.getCart = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const { cartBuy, orderBuy } = ConnectionDB_1.default.models;
function getCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        try {
            const cart = yield cartBuy.findByPk(id, { include: orderBuy });
            return res.json({ message: "Get Carts", cart });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getCart = getCart;
function postCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cartCreate = yield cartBuy.create(req.body);
            return res.send({ message: "Post cart", Create: cartCreate });
        }
        catch ({ message }) {
            console.log("MSG ERR=> ", message);
            return res.status(400).send({ message });
        }
    });
}
exports.postCart = postCart;
