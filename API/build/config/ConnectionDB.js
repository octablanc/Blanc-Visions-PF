"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv = __importStar(require("dotenv"));
//Models
const CartBuy_model_1 = __importDefault(require("../app/models/CartBuy.model"));
const CartSale_model_1 = __importDefault(require("../app/models/CartSale.model"));
const Categories_model_1 = __importDefault(require("../app/models/Categories.model"));
const OrderBuy_model_1 = __importDefault(require("../app/models/OrderBuy.model"));
const Products_model_1 = __importDefault(require("../app/models/Products.model"));
const Roles_model_1 = __importDefault(require("../app/models/Roles.model"));
const Users_model_1 = __importDefault(require("../app/models/Users.model"));
const ProductsProperties_model_1 = __importDefault(require("../app/models/ProductsProperties.model"));
const Images_model_1 = __importDefault(require("../app/models/Images.model"));
const ProductOrder_model_1 = __importDefault(require("../app/models/ProductOrder.model"));
const Ratings_model_1 = __importDefault(require("../app/models/Ratings.model"));
// Creates connection to the data base with Sequelize or MongoDB.
dotenv.config();
const { DB_URL } = process.env;
// const DBcontext = new Sequelize(`${DB_URL}`, {
//   logging: false,
//   native: false,
// });
const DBcontext = new sequelize_1.Sequelize(`${DB_URL}`, {
    logging: false,
    native: false,
});
// Creating tables from models
(0, CartBuy_model_1.default)(DBcontext);
(0, CartSale_model_1.default)(DBcontext);
(0, Products_model_1.default)(DBcontext);
(0, Categories_model_1.default)(DBcontext);
(0, ProductsProperties_model_1.default)(DBcontext);
(0, OrderBuy_model_1.default)(DBcontext);
(0, Roles_model_1.default)(DBcontext);
(0, Users_model_1.default)(DBcontext);
(0, Images_model_1.default)(DBcontext);
(0, ProductOrder_model_1.default)(DBcontext);
(0, Ratings_model_1.default)(DBcontext);
const { cartBuy, cartSale, categories, orderBuy, products, roles, users, products_properties, images, productOrder, ratings } = DBcontext.models;
/*
Un Usuario puede tener solo 1 Rol. Si el rol es usuario entonces tendra un carrito de compra. Si el Rol es Admin, entonces tendra un carrito de ventas.
Tanto el carrito de compra como el de venta, tendran acceso a la Orden de Compra.
La Orden de compra tiene muchos productos, y los productos corresponden a una categoria.
*/
// A user can have a single role, roles can have many users (one to many).
roles.hasMany(users);
users.belongsTo(roles);
//A user can have a single carrusel, carrusel can have a single users.(one to one)
users.hasOne(cartBuy);
cartBuy.belongsTo(users);
//A user can have a single carrusel of the Venta. Carrusel can have a single users.(one to one)
users.hasOne(cartSale);
cartSale.belongsTo(users);
//A Carrusel can have a single Order of Compra. Order of Compra can have a single Carrusel.(one to one)
cartBuy.hasOne(orderBuy);
orderBuy.belongsTo(cartBuy);
//A Carrusel of Venta can have a single Order of Compra. Order of Compra can have a single Carrusel of Venta.(one to one)
cartSale.hasOne(orderBuy);
orderBuy.belongsTo(cartSale);
//A Order of Compra can have many Products. Products can have many Order of Compra.(many to many)
orderBuy.belongsToMany(products, { through: 'orderBuy_Products' });
products.belongsToMany(orderBuy, { through: 'orderBuy_Products' });
//One category many products. A product can have only one category (one to many).
categories.hasMany(products);
products.belongsTo(categories);
//a product can have many images and an image can belong to a single product.
products.hasMany(images);
images.belongsTo(products);
//One product has many properties
products.hasMany(products_properties, {
    as: 'properties',
    foreignKey: 'productId',
});
products_properties.belongsTo(products);
// a user has many purchase orders, and one purchase order belongs to one user
users.hasMany(orderBuy);
orderBuy.belongsTo(users);
// a purchase order can have many product orders, and a product order can belong to a purchase order
orderBuy.hasMany(productOrder);
productOrder.belongsTo(orderBuy);
// Un producto tiene a una orden de producto, y una orden de producto pertenece a un producto.
products.hasOne(productOrder);
productOrder.belongsTo(products);
products.hasMany(ratings);
ratings.belongsTo(products);
exports.default = DBcontext;
