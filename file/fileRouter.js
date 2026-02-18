import { Router } from "express";
import { uploadFile, downloadFile } from "./fileController.js";
import { multerMiddleware } from "./filemiddleWare.js";

const fileRouter = Router();

fileRouter.post('/file',multerMiddleware,uploadFile);
fileRouter.get('/download/:id',downloadFile);

export{
    fileRouter
}