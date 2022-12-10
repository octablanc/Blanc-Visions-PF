import express from 'express';
import { getUsers, postUser, deleteUser } from '../controllers/UsersController';

const router = express.Router();
router.get('/', getUsers);
router.post('/', postUser);
router.delete('/', deleteUser);


// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;

// /product
// /users
// /cart
// /orden De compras (?)
// /categorias (?)