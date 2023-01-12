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
exports.retrieveUser = exports.deleteUser = exports.updateUser = exports.postUser = exports.getUserByMail = exports.getUserById = exports.getUsers = void 0;
const ConnectionDB_1 = __importDefault(require("../../config/ConnectionDB"));
const { users, roles, orderBuy } = ConnectionDB_1.default.models;
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { state, mail } = req.query;
            let result;
            if (mail) {
                result = yield users.findOne({
                    where: {
                        mail,
                    },
                    include: roles,
                    attributes: { exclude: ['roleId'] },
                });
                if (!result)
                    throw new Error('User not found!');
            }
            else {
                result = yield users.findAll({
                    where: state === 'true'
                        ? {
                            state: true,
                        }
                        : state === 'false'
                            ? {
                                state: false,
                            }
                            : {},
                    include: roles,
                    attributes: { exclude: ['roleId'] },
                    order: [['id', 'ASC']],
                });
            }
            return res.send(result);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getUsers = getUsers;
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield users.findAll({
                where: { id },
                include: orderBuy,
            });
            if (!user)
                return res.status(404).send({ message: 'User not found!' });
            return res.send(user);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getUserById = getUserById;
// export async function getUserById(req: Request, res: Response) {
//   try {
//     const { id } = req.params;
//     const user = await users.findByPk(id);
//     if (!user) return res.status(404).send({ message: "User not found!" });
//     return res.send(user);
//   } catch ({ message }) {
//     return res.status(400).send({ message });
//   }
// }
function getUserByMail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { mail } = req.body;
            console.log(mail);
            const user = yield users.findOne({
                where: {
                    mail,
                },
            });
            if (!user)
                return res.status(404).send({ message: 'User not found!' });
            return res.send(user);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.getUserByMail = getUserByMail;
function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = req.body;
            const userCreate = yield users.create(newUser);
            return res.send([{ message: 'post user', userCreate }]);
        }
        catch ({ message }) {
            return res.status(400).json({ message });
        }
    });
}
exports.postUser = postUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const newFields = req.body;
            const userToUpdate = yield users.findByPk(id);
            if (userToUpdate) {
                yield userToUpdate.update(newFields);
                yield userToUpdate.save();
            }
            else
                throw new Error('User not found!');
            return res.send(userToUpdate);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const userToDelete = yield users.findByPk(id);
            if (userToDelete) {
                yield userToDelete.update({ state: false });
                yield userToDelete.save();
            }
            else
                throw new Error('User not found!');
            return res.send(userToDelete);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.deleteUser = deleteUser;
function retrieveUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const userToRetrieve = yield users.findByPk(id);
            if (userToRetrieve) {
                yield userToRetrieve.update({ state: true });
                yield userToRetrieve.save();
            }
            else
                throw new Error('User not found!');
            return res.send(userToRetrieve);
        }
        catch ({ message }) {
            return res.status(400).send({ message });
        }
    });
}
exports.retrieveUser = retrieveUser;
//Formato para enviar un Usuario:
/*
        {
          "name": "Lucas 2022",
          "lastName": "Alegre",
          "imageProfile": "Una imagen",
          "phone": 3454,
          "mail": "lucasPruebo@gmail.com",
          "password": "contraseña12345",
          "userName": "Soy Un Nombre de  Usuario",
          "birthday": "2022-12-07"
          "state": true,
          roleId: 1
      }
    */
