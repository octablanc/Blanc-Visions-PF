"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RatingsControllers_1 = require("../controllers/RatingsControllers");
const router = express_1.default.Router();
router.get('/', RatingsControllers_1.getRatings);
router.post('/', RatingsControllers_1.postRating);
router.delete('/:id', RatingsControllers_1.deleteRating);
// Each router will have to be exported with "module.exports" because the loader uses "require" to import each router.
module.exports = router;
