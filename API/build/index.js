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
const axios_1 = __importDefault(require("axios"));
const mercadopago = require("mercadopago");
const body_parser_1 = __importDefault(require("body-parser"));
module.exports = (function runApp() {
    dotenv.config();
    const { PORT, BACKEND_URL } = process.env || 3001;
    const app = (0, express_1.default)();
    app.use((0, morgan_1.default)("dev"));
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }));
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((req, res, next) => {
        req;
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
    });
    // Uses every router loaded on router.
    app.use("/", routes_1.default);
    //middleware
    //Mercado Pago a partir de aca :
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    // Agrega credenciales. Este token es del vendedor a donde llegaran los pagos
    mercadopago.configure({
        access_token: "APP_USR-3248474346383256-121911-3cd56dfa5c4fdc916795b79a085dd93c-1266633934",
    });
    app.post("/notification", (req, res) => {
        try {
            const notification = req.body;
            console.log(notification);
            return res.send("hola");
        }
        catch ({ message }) {
            return res.status(400).send(message);
        }
    });
    app.post("/checkout", (req, res) => {
        // Crea un objeto de preferencia, "Orden de compra"
        // console.log("estoy en mecado pago", req.body);
        let preference = {
            items: [
                {
                    title: req.body.name,
                    quantity: 1,
                    //picture_url: req.body.url,
                    currency_id: "ARS",
                    unit_price: parseInt(req.body.price),
                },
            ],
            back_urls: {
                success: "https://kingcomm.vercel.app/buy",
                failure: "http://localhost:3000/",
                pending: "http://localhost:3000/",
            },
            notification_url: "https://kingcomm.vercel.app/buy",
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
    // Makes the connection to the data base.
    ConnectionDB_1.default.sync({ force: true }).then(() => {
        app.listen(PORT, () => {
            console.log("Server listening on port " + PORT);
            setTimeout(() => axios_1.default.post(`${BACKEND_URL}/products/bulk`, {}), 30000);
        });
    });
}());
//
