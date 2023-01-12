"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const ConnectionDB_1 = __importDefault(require("./config/ConnectionDB"));
const routes_1 = __importDefault(require("./app/routes"));
const mercadopago = require('mercadopago');
const body_parser_1 = __importDefault(require("body-parser"));
module.exports = (function runApp() {
    dotenv.config();
    const { PORT, BACKEND_URL } = process.env;
    const app = (0, express_1.default)();
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
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
    app.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
    app.use(body_parser_1.default.json({ limit: '50mb' }));
    app.use((req, res, next) => {
        req;
        res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    // Uses every router loaded on router.
    app.use('/', routes_1.default);
    //middleware
    //Mercado Pago a partir de aca :
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    // Agrega credenciales. Este token es del vendedor a donde llegaran los pagos
    mercadopago.configure({
        access_token: 'APP_USR-3248474346383256-121911-3cd56dfa5c4fdc916795b79a085dd93c-1266633934',
    });
    app.post('/notification', (req, res) => {
        try {
            const notification = req.body;
            console.log(notification);
            return res.send('hola');
        }
        catch ({ message }) {
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
            .then(function (response) {
            //la respuesta trae un objeto con la url especificada en init_point
            console.log(response);
            //res.json(response);
            res.redirect(response.body.init_point);
        })
            .catch(function (error) {
            console.log(error);
        });
    });
    app.post('/buy', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body);
            return res.send({});
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    }));
    // Makes the connection to the data base.
    ConnectionDB_1.default.sync({ force: true }).then(() => {
        app.listen(PORT, () => {
            console.log('Server listening ' + BACKEND_URL);
            // setTimeout(()=> axios.post(`${BACKEND_URL}/products/bulk`, {}), parseInt(TIMEOUT_BACKEND? TIMEOUT_BACKEND : '30000'));
            // setTimeout(() => axios.post(`${BACKEND_URL}/products/bulk`, {}), 1);
        });
    });
})();
//
{ /*
ESTA ES LA NOTIFICACION QUE NOS ENVIA MERCADO CUANDO PAGAMOS X URL!!!
¿COMO OBTENEMOS EL MERCHANT_ORDER_ID??

https://kingcomm.vercel.app/buy?
collection_id=53508755776
&collection_status=approved
&payment_id=53508755776
&status=approved
&external_reference=null
&payment_type=account_money
&merchant_order_id=7223260114
&preference_id=1266633934-c6834fe9-dc70-4b38-9fdb-c325de165a7d
&site_id=MLA&processing_mode=aggregator
&merchant_account_id=null
*/
}
