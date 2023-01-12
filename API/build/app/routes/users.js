"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = require("../controllers/UsersController");
const router = express_1.default.Router();
router.get('/', UsersController_1.getUsers);
router.get('/:id', UsersController_1.getUserById);
router.post('/', UsersController_1.postUser);
router.put('/:id', UsersController_1.retrieveUser);
router.put('/:id', UsersController_1.updateUser);
router.delete('/:id', UsersController_1.deleteUser);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
