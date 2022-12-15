import express from 'express';
import { deleteProperty, getProperties, postProperty, updateProperty } from '../controllers/ProductsPropertiesController';

const router = express.Router();

router.get('/', getProperties);
router.post('/', postProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);


// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;