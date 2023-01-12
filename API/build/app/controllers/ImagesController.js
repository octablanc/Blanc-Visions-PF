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
exports.getImageByPk = exports.updateImages = exports.deleteImages = exports.postImages = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const { images } = ConnectionDB_1.default.models;
// Model
/*
{ url_image: "https://http2.mlstatic.com/D_NQ_NP_979408-MLA42843661201_072020-O.webp", }*/
const postImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url_image = req.body.url_image;
    try {
        const imageCreate = yield images.create({ url_image });
        return res.json({ message: 'Imagenes agregadas.', imageCreate });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.postImages = postImages;
const deleteImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const deleteImg = yield images.destroy({ where: { id } });
        return res.json({
            message: deleteImg
                ? 'the image has been deleted successfully'
                : 'Could not delete image because it does not exist',
        });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.deleteImages = deleteImages;
const updateImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const image = yield images.findByPk(id);
        console.log(image, 'backend');
        const newFields = req.body;
        yield (image === null || image === void 0 ? void 0 : image.update(newFields));
        yield (image === null || image === void 0 ? void 0 : image.save());
        return res.send(image);
    }
    catch ({ message }) {
        return res.status(400).send({ message });
    }
});
exports.updateImages = updateImages;
const getImageByPk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const imageByPk = yield images.findByPk(id);
        return res.json(imageByPk !== null && imageByPk !== void 0 ? imageByPk : { message: 'Image not found' });
    }
    catch ({ message }) {
        console.log(message);
        return res.status(400).send({ message });
    }
});
exports.getImageByPk = getImageByPk;
