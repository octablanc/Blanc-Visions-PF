"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OffersController_1 = require("../controllers/OffersController");
const router = express_1.default.Router();
router.get("/", OffersController_1.getOffers);
router.post("/", OffersController_1.postOffers);
router.put("/:id", OffersController_1.updateOfers);
router.delete("/:id", OffersController_1.deleteOffers);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
