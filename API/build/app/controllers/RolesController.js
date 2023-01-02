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
exports.deleteRole = exports.updateRole = exports.postRole = exports.getRoleById = exports.getRoles = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const Roles = ConnectionDB_1.default.models.roles;
function getRoles(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Roles.findAll();
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getRoles = getRoles;
function getRoleById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const role = yield Roles.findByPk(id);
            if (!role)
                return res.status(404).send({ message: "Role not found!" });
            return res.send(role);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getRoleById = getRoleById;
function postRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newRole = req.body;
            const result = yield Roles.create(newRole);
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.postRole = postRole;
function updateRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const newFields = req.body;
            const roleToUpdate = yield Roles.findByPk(id);
            if (roleToUpdate) {
                yield (roleToUpdate === null || roleToUpdate === void 0 ? void 0 : roleToUpdate.update(newFields));
                yield (roleToUpdate === null || roleToUpdate === void 0 ? void 0 : roleToUpdate.save());
            }
            else
                return res.status(404).send({ message: "Role not found!" });
            return res.send(roleToUpdate);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateRole = updateRole;
function deleteRole(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const roleToDelete = yield Roles.findByPk(id);
            if (roleToDelete) {
                yield roleToDelete.update({ state: false });
                yield roleToDelete.save();
            }
            else
                return res.status(404).send({ message: "Role not found!" });
            return res.send(roleToDelete);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.deleteRole = deleteRole;
