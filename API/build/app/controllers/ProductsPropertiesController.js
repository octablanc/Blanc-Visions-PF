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
exports.deleteProperty = exports.updateProperty = exports.postProperty = exports.getProperties = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const ProductsProperties = ConnectionDB_1.default.models.products_properties;
function getProperties(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { productId } = req.query;
            const result = yield ProductsProperties.findAll({
                where: productId ? { productId } : {}
            });
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getProperties = getProperties;
function postProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const property = req.body;
            const newProperty = yield ProductsProperties.create(property);
            return res.send(newProperty);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.postProperty = postProperty;
function updateProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const newFields = req.body;
            const propertyToUpdate = yield ProductsProperties.findByPk(id);
            yield (propertyToUpdate === null || propertyToUpdate === void 0 ? void 0 : propertyToUpdate.update(newFields));
            yield (propertyToUpdate === null || propertyToUpdate === void 0 ? void 0 : propertyToUpdate.save());
            return res.send(propertyToUpdate);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateProperty = updateProperty;
function deleteProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const propertyToDelete = yield ProductsProperties.findByPk(id);
            yield (propertyToDelete === null || propertyToDelete === void 0 ? void 0 : propertyToDelete.destroy());
            return res.send({ message: 'Property deleted successfully' });
        }
        catch ({ message }) {
            return res.status(400).send(message);
        }
    });
}
exports.deleteProperty = deleteProperty;
