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
import ProductsProperties from "../app/models/ProductsProperties.model";
import Images from "../app/models/Images.model";



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
Products(DBcontext);
Categories(DBcontext);
ProductsProperties(DBcontext);
OrderBuy(DBcontext);
Roles(DBcontext);
Users(DBcontext);
Images(DBcontext)

const { cartBuy, cartSale, categories, orderBuy, products, roles, users, products_properties, images } =
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
orderBuy.belongsToMany(products, { through: "orderBuy_Products" });
products.belongsToMany(orderBuy, { through: "orderBuy_Products" });

//One category many products. A product can have only one category (one to many).
categories.hasMany(products);
products.belongsTo(categories);

//a product can have many images and an image can belong to a single product.
products.hasMany(images);
images.belongsTo(products)
//One product has many properties
products.hasMany(products_properties, {as: 'properties', foreignKey: 'productId'});
products_properties.belongsTo(products);

export default DBcontext;
