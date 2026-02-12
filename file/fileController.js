import {cloudUpload} from './cloudinary.service.js'
import { prisma } from '../lib/prisma.js';
import { matchedData, validationResult } from 'express-validator';
import { prismaAddFile } from '../queries/fileQueries.js';
 
async function uploadFile(req, res){
   //first validate and mutate data

   //handle data upload:
   const errors = validationResult(req);

   if(!errors.isEmpty){
      console.log(errors.array());
      res.redirect('/');
   }

   try{       
      if(!req.file) return res.redirect('/');
         
      const result = await cloudUpload(req.file.buffer);
      console.log('uploaded to cloudinary')

      if(!result.secure_url){
         console.log('ERROR: no secure path found0')
         res.redirect('/');
      }
      //prisma takes a fileobj that has the following
      const fileObj ={
         userId :        req.user.id,
         originalName:   req.file.originalname,      
         fileName:       result.public_id,    
         mimeType:       req.file.mimetype,          
         size:           req.file.size,           
         path:           result.secure_url,
         folderId:       null               //implement folderid get if file is created inside a folder
      }
      await prismaAddFile(fileObj);
      console.log('added to DB')
      
   }catch(err){
      console.log(err)
   }
   res.redirect('/');
 }

 export{
    uploadFile
 }
