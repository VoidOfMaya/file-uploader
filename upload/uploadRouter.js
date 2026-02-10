import { Router } from "express";
import { uploadFile } from "./uploadController.js";
 import multer from 'multer';

 const upload = multer({dest: 'uploads/'});

const uploadRouter = Router();

uploadRouter.post('/file',upload.single('upFile'),uploadFile);

export{
    uploadRouter
}