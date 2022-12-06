import express from "express";
import { getProducts, postUser } from "../controllers/ProductsControllers";

const router = express.Router();

router.get("/", getProducts);
router.post('/', postUser);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
