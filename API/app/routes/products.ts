import express from "express";
import { getProducts, postProduct, getProductById, updateProduct, deleteProduct, paginateProducts} from "../controllers/ProductsController";

const router = express.Router();

router.get("/", getProducts);
router.get("/paginate", paginateProducts);
router.get("/:id", getProductById);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
