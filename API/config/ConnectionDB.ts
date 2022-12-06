import { DataTypes, Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import modelExample from '../app/models/model.example';

//Models
import Categories from '../app/models/Categories.model';
import Products from '../app/models/Products.model';
import Roles from '../app/models/Roles.model';
import Sales_Detail from '../app/models/Sales_Detail.model';
import Sales from '../app/models/Sales.model';
import Users from '../app/models/Users.model';
import UserAddress from '../app/models/UsersAddress.model';
import sequelize from 'sequelize';

// Creates connection to the data base with Sequelize or MongoDB.
dotenv.config();
const {
    DB_URL
} = process.env;

const DBcontext = new Sequelize(`${DB_URL}`, {
    logging: false,
    native: false
});

// Creating a model example
modelExample(DBcontext);

// Creating tables from models
Categories(DBcontext);
Products(DBcontext);
Roles(DBcontext);
Sales_Detail(DBcontext);
Sales(DBcontext);
Users(DBcontext);
UserAddress(DBcontext);

// Here will be all tables relations
const { users, users_address, sales, roles, products, categories, sales_detail } = DBcontext.models;
/* 
usuario puede tener una direccion y una direccion le correspone a un unico usuario(de uno a muchos).
Una direccion puede corresponder a varias ventas. Pero, una venta tiene una sola direccion(uno a muchos).
Un usuario puede tener un unico rol y roles puede tener muchos usuarios(uno a muchos).
Un producto puede tener una sola categoria, una categoria muchos productos(uno a muchos).
Un producto tiene un Detalle de venta. Y un Detalles de venta corresponde a un Producto(uno a uno)
*/




//Un producto puede tener una sola categoria, una categoria muchos productos(uno a muchos).
products.hasMany(categories)
categories.belongsTo(products);

//Un producto tiene un Detalle de venta. Y un Detalles de venta corresponde a un Producto(uno a uno)
products.hasOne(sales_detail);
sales_detail.belongsTo(products);

//Un Usuario tiene una direccion y Una direccion tiene 1 unico Usuario(Uno a Uno).
users.hasOne(users_address);
users_address.belongsTo(users);

//un usuario puede tener un unico rol y Roles puede tener muchos usuarios(uno a muchos).
users.hasMany(roles)
roles.belongsTo(users);

//Una venta tiene una sola direccion. Pero, una direccion puede corresponder a varias ventas(uno a muchos).
sales.hasMany(users_address)
users_address.belongsTo(sales);

//Una venta tiene un Detalle de Venta. y Un detalle de venta corresponde a una Venta(uno a uno)
sales.hasOne(sales_detail);
sales_detail.belongsTo(sales);

//Una venta corresponde a un usuario. Y un usuario puede tener muchas ventas.(uno a muchos)
sales.hasMany(users);
users.belongsTo(sales);


export default DBcontext;