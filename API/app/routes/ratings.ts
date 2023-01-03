import express from 'express';
import { deleteRating, getRatings, postRating } from '../controllers/RatingsControllers';

const router = express.Router();

router.get('/', getRatings);
router.post('/', postRating);
router.delete('/:id', deleteRating);



// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
