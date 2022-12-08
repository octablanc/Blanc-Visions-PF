import express from "express";
import { getProducts, postProduct, getProductByPk} from "../controllers/ProductsControllers";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductByPk);
router.post('/', postProduct);


// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
