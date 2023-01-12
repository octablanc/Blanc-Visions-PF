"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsController_1 = require("../controllers/ProductsController");
const router = express_1.default.Router();
router.get('/', ProductsController_1.getProducts);
router.get('/paginate', ProductsController_1.paginateProducts);
router.get('/:id', ProductsController_1.getProductById);
router.post('/', ProductsController_1.postProduct);
router.post('/bulk', ProductsController_1.bulk);
router.put('/:id', ProductsController_1.updateProduct);
router.put('/state/:id', ProductsController_1.retrieveProduct);
router.delete('/:id', ProductsController_1.deleteProduct);
router.put('/stock/:id', ProductsController_1.setProductStock);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
