import express from "express";
import { getCategories, getCategoriesByPk, postCategory, updateCategory, deleteCategory } from "../controllers/CategoriesController";

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoriesByPk);
router.post('/', postCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;