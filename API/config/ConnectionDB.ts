import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

//Models
import CartBuy from "../app/models/CartBuy.model";
import CartSale from "../app/models/CartSale.model";
import Categories from "../app/models/Categories.model";
import OrderBuy from "../app/models/OrderBuy.model";
import Products from "../app/models/Products.model";
import Roles from "../app/models/Roles.model";
import Users from "../app/models/Users.model";

// Creates connection to the data base with Sequelize or MongoDB.
dotenv.config();
const { DB_URL } = process.env;

const DBcontext = new Sequelize(`${DB_URL}`, {
  logging: false,
  native: false,
});

// Creating tables from models
CartBuy(DBcontext);
CartSale(DBcontext);
Categories(DBcontext);
OrderBuy(DBcontext);
Products(DBcontext);
Roles(DBcontext);
Users(DBcontext);

const { cart, cartSale, categories, orderSales, products, roles, users } =
  DBcontext.models;

/*
Un Usuario puede tener solo 1 Rol. Si el rol es usuario entonces tendra un carrito de compra. Si el Rol es Admin, entonces tendra un carrito de ventas.
Tanto el carrito de compra como el de venta, tendran acceso a la Orden de Compra.
La Orden de compra tiene muchos productos, y los productos corresponden a una categoria.
*/

// A user can have a single role, roles can have many users (one to many).
roles.hasMany(users);
users.belongsTo(roles);

//A user can have a single carrusel, carrusel can have a single users.(one to one)
users.hasOne(cart);
cart.belongsTo(users);

//A user can have a single carrusel of the Venta. Carrusel can have a single users.(one to one)
users.hasOne(cartSale);
cartSale.belongsTo(users);

//A Carrusel can have a single Order of Compra. Order of Compra can have a single Carrusel.(one to one)
cart.hasOne(orderSales);
orderSales.belongsTo(cart);

//A Carrusel of Venta can have a single Order of Compra. Order of Compra can have a single Carrusel of Venta.(one to one)
cartSale.hasOne(orderSales);
orderSales.belongsTo(cartSale);

//A Order of Compra can have many Products. Products can have many Order of Compra.(many to many)
orderSales.belongsToMany(products, { through: "orderSales_Products" });
products.belongsToMany(orderSales, { through: "orderSales_Products" });

//One category many products. A product can have only one category (one to many).
categories.hasMany(products);
products.belongsTo(categories);

export default DBcontext;
