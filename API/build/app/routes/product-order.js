"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductOrderController_1 = require("../controllers/ProductOrderController");
const router = express_1.default.Router();
router.get('/:id', ProductOrderController_1.getProductsOrderById);
router.get('/', ProductOrderController_1.getProductsOrder);
router.post('/', ProductOrderController_1.postProductsOrder);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
