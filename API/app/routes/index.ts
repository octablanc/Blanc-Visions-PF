import express from 'express';
import fs from 'fs';

const router = express.Router();
const pathRouter = `${__dirname}`;

// Removes the file name extension to keep the file name only.
function removeFileExtension(fileName:String){
    return fileName.split('.').shift();
}

// Reads every router name on routes folder to load in the main router.
fs.readdirSync(pathRouter).forEach((file:String)=> {
    const routerName = removeFileExtension(file);
    if(routerName != 'index')
        // Creates the URL with the file name and loads the router.
        // Example: users.ts <--- router
        // Creates the url: /users 
        router.use(`/${routerName}`, require(`./${routerName}`));
    
})

export default router;