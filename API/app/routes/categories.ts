import express from "express";
import { getCategories, getCategoriesById, postCategory, updateCategory, deleteCategory } from "../controllers/CategoriesController";

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategoriesById);
router.post('/', postCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;