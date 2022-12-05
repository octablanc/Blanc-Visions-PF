import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import modelExample from '../app/models/model.example';

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

export default DBcontext;