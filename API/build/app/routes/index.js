"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const pathRouter = `${__dirname}`;
// Removes the file name extension to keep the file name only.
function removeFileExtension(fileName) {
    return fileName.split('.').shift();
}
// Reads every router name on routes folder to load in the main router.
fs_1.default.readdirSync(pathRouter).forEach((file) => {
    const routerName = removeFileExtension(file);
    if (routerName != 'index')
        // Creates the URL with the file name and loads the router.
        // Example: users.ts <--- router
        // Creates the url: /users 
        router.use(`/${routerName}`, require(`./${routerName}`));
});
exports.default = router;
