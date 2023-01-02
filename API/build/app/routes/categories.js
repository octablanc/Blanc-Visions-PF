"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategoriesController_1 = require("../controllers/CategoriesController");
const router = express_1.default.Router();
router.get('/', CategoriesController_1.getCategories);
router.get('/:id', CategoriesController_1.getCategoriesById);
router.post('/', CategoriesController_1.postCategory);
router.put('/:id', CategoriesController_1.updateCategory);
router.delete('/:id', CategoriesController_1.deleteCategory);
module.exports = router;
