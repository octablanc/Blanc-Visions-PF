import express from 'express';
import { getCart, postCart } from '../controllers/CartControllers';
// import DBcontext from "../../config/ConnectionDB";

const router = express.Router();
router.get('/', getCart);
router.post('/', postCart);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;