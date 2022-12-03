import express from 'express';
import { getUsers } from '../controllers/ExampleController';

const router = express.Router();
router.get('/', getUsers);

// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;