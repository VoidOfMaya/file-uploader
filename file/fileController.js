import {cloudUpload} from './cloudinary.service.js'
import { prisma } from '../lib/prisma.js';
import { matchedData, validationResult } from 'express-validator';
import { prismaAddFile } from '../queries/queries.js';
 
async function uploadFile(req, res){
   //first validate and mutate data

   //handle data upload:
   
   const data = matchedData(req);

   try{
      console.log(req.body)
      console.log(req.file)
      /*
      if(!req.file) return res.render('/',{error: 'no file uploaded'});
      const result = await cloudUpload(req.file.buffer);
      console.log('uploaded to cloudinary')

      //prisma takes a fileobj that has the following
     const fileObj ={
      userId :        data.userId,
      originalName:   data.originalName,      
      fileName:       data.fileName,    
      mimeType:       data.mimeType,          
      size:           data.size,           
      path:           result.secure_url
     }
     await prismaAddFile(fileObj);
     */

   }catch(err){
      console.log(err)
   }
   res.redirect('/');
 }

 export{
    uploadFile
 }
