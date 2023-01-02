"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RolesController_1 = require("../controllers/RolesController");
const router = express_1.default.Router();
router.get('/', RolesController_1.getRoles);
router.get('/:id', RolesController_1.getRoleById);
router.post('/', RolesController_1.postRole);
router.put('/:id', RolesController_1.updateRole);
router.delete('/:id', RolesController_1.deleteRole);
module.exports = router;
