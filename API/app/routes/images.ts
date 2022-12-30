import express from 'express';
import { postImages, getImageByPk, deleteImages } from '../controllers/ImagesController';

const router = express.Router();

router.get('/:id', getImageByPk);
router.post('/', postImages);
router.delete('/:id', deleteImages);

module.exports = router;
