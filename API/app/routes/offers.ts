import express from "express";
import {
  getOffers,
  postOffers,
  updateOfers,
  deleteOffers,
} from "../controllers/OffersController";

const router = express.Router();

router.get("/", getOffers);
router.post("/", postOffers);
router.put("/:id", updateOfers);
router.delete("/:id", deleteOffers);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
