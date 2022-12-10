import express from 'express';
import { deleteUser, getUserById, getUserLogin, getUsers, postUser, updateUser } from '../controllers/UsersController';

const router = express.Router();

router.get('/', getUsers);
router.get('/', getUserLogin);
router.get('/:id', getUserById);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;