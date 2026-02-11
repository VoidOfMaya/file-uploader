import { Router } from "express";
import { uploadFile } from "./fileController.js";
import multer from 'multer';
import { fileUser } from "../validations/validate.js";

//const upload = multer({dest: 'uploads/'});
const storage = multer.memoryStorage();

const upload = multer({storage: storage,limits: { fileSize: 10 * 1022 * 1024}});

const fileRouter = Router();

fileRouter.post('/file',upload.single('upFile'),uploadFile);

export{
    fileRouter
}