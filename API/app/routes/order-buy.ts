import express from "express";
import { getCartUser, getOrderBuy, getOrderBuyUserId, postOrderBuy,setOrderBuy } from "../controllers/orderBuyControllers";

const router = express.Router();

router.get("/", getOrderBuy);
router.get("/cart/:userId", getCartUser);
router.get("/user/:userId", getOrderBuyUserId);
router.post("/", postOrderBuy);
router.put("/:id", setOrderBuy);

module.exports = router;
