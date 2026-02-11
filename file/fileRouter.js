import { Router } from "express";
import { uploadFile } from "./fileController.js";
import multer from 'multer';

//const upload = multer({dest: 'uploads/'});
const storage = multer.memoryStorage();

const upload = multer({storage: storage});

const fileRouter = Router();

fileRouter.post('/file',upload.single('upFile'),uploadFile);

export{
    fileRouter
}