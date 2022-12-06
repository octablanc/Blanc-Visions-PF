import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

//Models
import Categories from '../app/models/Categories.model';
import Products from '../app/models/Products.model';
import Roles from '../app/models/Roles.model';
import Sales_Detail from '../app/models/Sales_Detail.model';
import Sales from '../app/models/OrderCompra';
import Users from '../app/models/Users.model';
import UserAddress from '../app/models/UsersAddresses.model';

// Creates connection to the data base with Sequelize or MongoDB.
dotenv.config();
const {
    DB_URL
} = process.env;

const DBcontext = new Sequelize(`${DB_URL}`, {
    logging: false,
    native: false
});

// Creating tables from models
Categories(DBcontext);
Products(DBcontext);
Roles(DBcontext);
Sales_Detail(DBcontext);
Sales(DBcontext);
Users(DBcontext);
UserAddress(DBcontext);

const { users, users_addresses, sales, roles, products, categories, sales_detail } = DBcontext.models;

// A product can have only one category, one category many products (one to many).
categories.hasMany(products);
products.belongsTo(categories);

// A product has many sales details, one sales detail corresponds to one product (one to many).
products.hasMany(sales_detail);
sales_detail.belongsTo(products);

// A User has one address, an address has only one user (One to One).
users_addresses.hasOne(users);
users.belongsTo(users_addresses);

// A user can have a single role, roles can have many users (one to many).
roles.hasMany(users)
users.belongsTo(roles);

// A sale has only one address, one address can correspond to several sales (one to many).
users_addresses.hasMany(sales, { foreignKey: 'deliveryAddress'});
// sales.belongsTo(users_addresses); <-- this will create another foreign key that we do not need. 

// A sale has many sale details, a sale detail corresponds to a sale (one to many).
sales.hasMany(sales_detail);
sales_detail.belongsTo(sales);

// One sale corresponds to one user, one user can have many sales (one to many).
users.hasMany(sales);
sales.belongsTo(users);
users.hasMany(sales, { foreignKey: 'userBuyerId' }); // Buyer relation

export default DBcontext;