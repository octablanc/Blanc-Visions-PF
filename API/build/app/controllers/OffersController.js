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
exports.deleteOffers = exports.updateOfers = exports.postOffers = exports.getOffers = void 0;
// Data base context import
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
// Models
const Offers = ConnectionDB_1.default.models.offers;
function getOffers(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Offers.findAll();
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getOffers = getOffers;
function postOffers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const offers = req.body;
            let result = yield Offers.create(offers);
            return res.send(result);
        }
        catch ({ message }) {
            console.log(message);
            return res.status(400).send({ message });
        }
    });
}
exports.postOffers = postOffers;
function updateOfers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const newFields = req.body;
            const offersUpdate = yield Offers.findByPk(id);
            if (offersUpdate) {
                yield offersUpdate.update(newFields);
                yield offersUpdate.save();
            }
            else
                return res.status(404).send({ message: "Offert no found!" });
            return res.send(offersUpdate);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateOfers = updateOfers;
function deleteOffers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const offersDelete = yield Offers.findByPk(id);
            if (offersDelete) {
                yield offersDelete.update({ state: false });
                yield offersDelete.save();
            }
            else
                return res.status(404).send({ message: "Product not found!" });
            return res.send({ message: "Offers has been discharged!" });
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.deleteOffers = deleteOffers;
