import { Router } from "express";
import { folders } from "./folderController.js";

const folderRouter = Router();

//get all folders
folderRouter.get('/All',folders)
// get folder page
folderRouter.get('/:id',folders)
//post create folder
folderRouter.post('/new',folders)
//post edit folder
folderRouter.post('/edit',folders)
//post delete folder
folderRouter.get('/delete',folders)

export{
    folderRouter
}