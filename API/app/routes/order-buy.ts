import express from "express";
import { getOrderBuy } from "../controllers/orderBuyControllers";

const router = express.Router();

router.get("/", getOrderBuy);


// router.delete('/', postImages);

module.exports = router;
