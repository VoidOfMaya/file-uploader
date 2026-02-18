import multer from 'multer';
import { getGlobalData } from '../default/defaultmiddleware.js';


//const upload = multer({dest: 'uploads/'});
const storage = multer.memoryStorage();

const upload = multer({storage: storage,limits: 
    { fileSize: 5 * 1024 * 1024},
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
            cb(null, false);
            req.fileValidationError = "Invalid file type. Allowed: images, PDF, and Word documents.";
            
        }
    }
});

function multerMiddleware (req, res, next){
    upload.single('upFile')(req, res, (err)=>{
        try{
            const {files, folders} = getGlobalData(req.user.id);
            const childFiles = (files ?? []).filter(f => f.folderId === null);
            if(err?.code === 'LIMIT_FILE_SIZE'){
                
                req.flash('errors', 'File exceeds the 5MB size limit.');
                return req.session.save(()=>{
                   res.redirect('/') 
                })
            }
            if(req.fileValidationError){
                req.flash('errors',req.fileValidationError);
                return req.session.save(()=>{
                   res.redirect('/') 
                })
            }  
            next();          
        }catch(err){
            next(err);            
        }

    })

}
export{
    multerMiddleware,
}