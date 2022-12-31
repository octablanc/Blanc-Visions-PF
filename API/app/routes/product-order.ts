import express from 'express';
import { getProductsOrder, getProductsOrderById, postProductsOrder } from '../controllers/ProductOrderController';

const router = express.Router();

router.get('/:id', getProductsOrderById);
router.get('/', getProductsOrder);
router.post('/', postProductsOrder);


// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;