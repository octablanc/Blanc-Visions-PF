import express from 'express';
import {
  getProducts,
  postProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  paginateProducts,
  bulk,
  setProductStock,
  retrieveProduct,
  // searchProducts,
} from '../controllers/ProductsController';

const router = express.Router();

router.get('/', getProducts);
router.get('/paginate', paginateProducts);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.post('/bulk', bulk);
router.put('/:id', updateProduct);
router.put('/state/:id', retrieveProduct);
router.delete('/:id', deleteProduct);
router.put('/stock/:id', setProductStock);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
