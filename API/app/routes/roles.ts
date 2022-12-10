import express from "express";
import { deleteRole, getRoleById, getRoles, postRole, updateRole } from "../controllers/RolesController";

const router = express.Router();

router.get('/', getRoles);
router.get('/:id', getRoleById);
router.post('/', postRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

module.exports = router;