import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import DBcontext from './config/ConnectionDB';
import router from './app/routes';
import axios from 'axios';
import bodyParser from 'body-parser';

dotenv.config();
const { PORT } = process.env || 3001;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req, res, next) => {
  req;
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Uses every router loaded on router.
app.use('/', router);

// Makes the connection to the data base.

DBcontext.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
    axios.post('http://localhost:3001/products/bulk');
  });
});

//hola
