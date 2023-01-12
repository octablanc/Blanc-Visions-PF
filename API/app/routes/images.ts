import express from 'express';
import {
  postImages,
  getImageByPk,
  deleteImages,
  updateImages,
} from '../controllers/ImagesController';

const router = express.Router();

router.get('/:id', getImageByPk);
router.put('/edit/:id', updateImages);

router.post('/', postImages);
router.delete('/:id', deleteImages);

module.exports = router;
