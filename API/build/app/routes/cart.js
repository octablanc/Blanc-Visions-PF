"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CartControllers_1 = require("../controllers/CartControllers");
// import DBcontext from "../../config/ConnectionDB";
const router = express_1.default.Router();
router.get('/', CartControllers_1.getCart);
router.post('/', CartControllers_1.postCart);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
