import express from 'express';
import { getProductsOrder, getProductsOrderById, postProductsOrder, getProductsOrderUser, postProductsOrderCart, setQuantityProductsOrderCart, deleteProductsOrderCart, deleteCartUser } from '../controllers/ProductOrderController';

const router = express.Router();

router.get('/:id', getProductsOrderById);
router.get('/', getProductsOrder);
router.post('/', postProductsOrder);

router.get('/cart/user/:id', getProductsOrderUser);
router.put('/cart/user/:id', setQuantityProductsOrderCart);
router.delete('/cart/user/:id', deleteProductsOrderCart);
router.delete('/cart/user/all/:id', deleteCartUser);
router.post('/cart/user/', postProductsOrderCart);



// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;