"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsPropertiesController_1 = require("../controllers/ProductsPropertiesController");
const router = express_1.default.Router();
router.get('/', ProductsPropertiesController_1.getProperties);
router.post('/', ProductsPropertiesController_1.postProperty);
router.put('/:id', ProductsPropertiesController_1.updateProperty);
router.delete('/:id', ProductsPropertiesController_1.deleteProperty);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
