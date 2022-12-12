import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import DBcontext from './config/ConnectionDB';
import router from './app/routes';
import axios from 'axios';

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Uses every router loaded on router.
app.use('/', router);

// Makes the connection to the data base.

DBcontext.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
    axios.post('http://localhost:3001/products/bulk');
  });
});
