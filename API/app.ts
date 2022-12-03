import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import ConnectionDB from './config/ConnectionDB';
import router from './app/routes';

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Uses every router loaded on router.
app.use('/', router);

// Makes the connection to the data base.
ConnectionDB();
app.listen(PORT, ()=>{
    console.log("Server listening on port "+PORT);
});
