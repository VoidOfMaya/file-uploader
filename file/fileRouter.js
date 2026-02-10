import { Router } from "express";
import { uploadFile } from "./fileController.js";
 import multer from 'multer';

 const upload = multer({dest: 'uploads/'});

const fileRouter = Router();

fileRouter.post('/file',upload.single('upFile'),uploadFile);

export{
    fileRouter
}