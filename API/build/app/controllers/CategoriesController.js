"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.postCategory = exports.getCategoriesById = exports.getCategories = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
// Model
const Categories = ConnectionDB_1.default.models.categories;
function getCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name } = req.query;
            const result = yield Categories.findAll(name ? {
                where: {
                    name
                }
            } : undefined);
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getCategories = getCategories;
function getCategoriesById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const result = yield Categories.findByPk(id);
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getCategoriesById = getCategoriesById;
function postCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = req.body;
            const result = yield Categories.create(category);
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.postCategory = postCategory;
function updateCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const category = yield Categories.findByPk(id);
            const newFields = req.body;
            yield (category === null || category === void 0 ? void 0 : category.update(newFields));
            yield (category === null || category === void 0 ? void 0 : category.save());
            return res.send(category);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateCategory = updateCategory;
function deleteCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const categoryToDelete = yield Categories.findByPk(id);
            yield (categoryToDelete === null || categoryToDelete === void 0 ? void 0 : categoryToDelete.update({ state: false }));
            yield (categoryToDelete === null || categoryToDelete === void 0 ? void 0 : categoryToDelete.save());
            return res.send({ message: "Category has been discharged!" });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.deleteCategory = deleteCategory;
