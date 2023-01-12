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
exports.deleteRating = exports.postRating = exports.getRatings = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const Ratings = ConnectionDB_1.default.models.ratings;
const User = ConnectionDB_1.default.models.user;
const getRatings = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRatings = yield Ratings.findAll({ include: User });
        return res.json({ allRatings });
    }
    catch ({ message }) {
        return res.status(400).json({ message });
    }
});
exports.getRatings = getRatings;
const postRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { score, commentary, productId, userId } = req.body;
        const RatingCreated = yield Ratings.create({
            score,
            commentary,
            productId,
            userId
        }, { include: User });
        return res.json({ RatingCreated });
    }
    catch ({ message }) {
        return res.status(400).json({ message });
    }
});
exports.postRating = postRating;
const deleteRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const deleted = yield Ratings.destroy({ where: { id } });
        return res.json({
            message: deleted
                ? `comentario eliminado con exito. id => ${id}`
                : `No se pudo encontrar el comentario con el ID ${id}`,
        });
    }
    catch ({ message }) {
        return res.status(400).json({ message });
    }
});
exports.deleteRating = deleteRating;
