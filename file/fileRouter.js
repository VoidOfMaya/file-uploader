import { Router } from "express";
import { uploadFile, downloadFile } from "./fileController.js";
import multer from 'multer';
import { fileUser } from "../validations/validate.js";

//const upload = multer({dest: 'uploads/'});
const storage = multer.memoryStorage();

const upload = multer({storage: storage,limits: 
    { fileSize: 5 * 1022 * 1024},
    fileFilter: (req, file, cb)=>{
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];
        if(allowedTypes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error("only images, pdgs, and word docs allowed!"));
        }
    }
});

const fileRouter = Router();

fileRouter.post('/file',upload.single('upFile'),uploadFile);
fileRouter.get('/download/:id',downloadFile)

export{
    fileRouter
}