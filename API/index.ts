import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import DBcontext from './config/ConnectionDB';
import router from './app/routes';
import axios from 'axios';
const mercadopago = require('mercadopago');
import bodyParser from 'body-parser';

module.exports = (function runApp() {
  dotenv.config();
  const { PORT, BACKEND_URL } = process.env;
  const app = express();

  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  // app.set('trust proxy', true);
  // app.use('/', (req, res, next) => {
  //   var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  //   if (req.res?.statusCode) {
  //     console.log(
  //       '\x1b[40m\x1b[33m',
  //       `${req.method} ${req.url}` +
  //         `${
  //           res?.statusCode > 199
  //             ? '\x1b[32m'
  //             : res?.statusCode > 299
  //             ? '\x1b[34m'
  //             : '\x1b[31m'
  //         } ${res?.statusCode} \x1b[0m`
  //     );
  //     console.log(
  //       `\x1b[40m\x1b[35m IP: (${ip}  DATE: ${Date()
  //         .toString()
  //         .slice(0, 25)})\x1b[0m`
  //     );
  //   }
  //   next();
  // });

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
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
  });

  // Uses every router loaded on router.
  app.use('/', router);
  //middleware

  //Mercado Pago a partir de aca :
  app.use(bodyParser.urlencoded({ extended: false }));

  // Agrega credenciales. Este token es del vendedor a donde llegaran los pagos
  mercadopago.configure({
    access_token:
      'APP_USR-3248474346383256-121911-3cd56dfa5c4fdc916795b79a085dd93c-1266633934',
  });

  app.post('/notification', (req, res) => {
    try {
      const notification = req.body;
      console.log(notification);
      return res.send('hola');
    } catch ({ message }) {
      return res.status(400).send(message);
    }
  });

  app.post('/checkout', (req, res) => {
    // Crea un objeto de preferencia, "Orden de compra"
    // console.log("estoy en mecado pago", req.body);
    let preference = {
      items: [
        {
          title: req.body.name,
          quantity: 1,
          //picture_url: req.body.url,
          currency_id: 'ARS',
          unit_price: parseInt(req.body.price),
        },
      ],
      back_urls: {
        success: 'https://kingcomm.vercel.app/buy',
        failure: 'http://localhost:3000/',
        pending: 'http://localhost:3000/',
      },
      notification_url: 'https://kingcomm.vercel.app/buy',
      auto_return: 'approved',
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response: any) {
        //la respuesta trae un objeto con la url especificada en init_point
        console.log(response);
        //res.json(response);
        res.redirect(response.body.init_point);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  });

  app.post('/buy', async (req, res) =>{
    try {
      console.log(req.body);
      return res.send({});
    } catch ({message}) {
      return res.status(400).send({message});
    }
  });

  // Makes the connection to the data base.
  DBcontext.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log('Server listening ' + BACKEND_URL);
      // setTimeout(()=> axios.post(`${BACKEND_URL}/products/bulk`, {}), parseInt(TIMEOUT_BACKEND? TIMEOUT_BACKEND : '30000'));
      setTimeout(() => axios.post(`${BACKEND_URL}/products/bulk`, {}), 1);
    });
  });
})();
//
