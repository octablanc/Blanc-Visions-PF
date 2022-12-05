import { Sequelize } from 'sequelize';
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

export default DBcontext;