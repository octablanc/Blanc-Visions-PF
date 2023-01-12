"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImagesController_1 = require("../controllers/ImagesController");
const router = express_1.default.Router();
router.get('/:id', ImagesController_1.getImageByPk);
router.put('/edit/:id', ImagesController_1.updateImages);
router.post('/', ImagesController_1.postImages);
router.delete('/:id', ImagesController_1.deleteImages);
module.exports = router;
