import { Router } from "express";
import {createFolder, getFolderById, editFolder, DeleteFolder } from "./folderController.js";
import {validateFolderName} from '../validations/validate.js'
const folderRouter = Router();

//get all folders

// get folder page
folderRouter.get('/:id',getFolderById);
//post create folder
folderRouter.post('/new',validateFolderName,createFolder);
//post edit folder
folderRouter.post('/edit',validateFolderName,editFolder);
//post delete folder
folderRouter.post('/delete',DeleteFolder);

export{
    folderRouter
}