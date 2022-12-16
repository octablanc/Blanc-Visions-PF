import express from "express";
import { postImages, getImageByPk } from "../controllers/ImagesController";

const router = express.Router();

router.get("/", getImageByPk);
router.post("/", postImages);


// router.delete('/', postImages);

module.exports = router;
