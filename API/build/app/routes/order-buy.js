"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderBuyControllers_1 = require("../controllers/orderBuyControllers");
const router = express_1.default.Router();
router.get("/", orderBuyControllers_1.getOrderBuy);
router.get("/cart/:userId", orderBuyControllers_1.getCartUser);
router.get("/user/:userId", orderBuyControllers_1.getOrderBuyUserId);
router.post("/", orderBuyControllers_1.postOrderBuy);
router.put("/:id", orderBuyControllers_1.setOrderBuy);
module.exports = router;
