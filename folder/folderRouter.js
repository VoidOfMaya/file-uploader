import { Router } from "express";
import { folders,createFolder, getFolderById } from "./folderController.js";
import {validateFolderName} from '../validations/validate.js'

const folderRouter = Router();

//get all folders
folderRouter.get('/All',folders)
// get folder page
folderRouter.get('/:id',getFolderById)
//post create folder
folderRouter.post('/new',validateFolderName,createFolder)
//post edit folder
folderRouter.post('/edit',folders)
//post delete folder
folderRouter.get('/delete',folders)

export{
    folderRouter
}