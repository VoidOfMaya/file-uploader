import {cloudUpload} from './cloudinary.service.js'
import { prisma } from '../lib/prisma.js';
import { matchedData, validationResult } from 'express-validator';
 async function uploadFile(req, res){
   //first validate and mutate data

   //handle data upload:
   
   const data = matchedData(req);

   try{
      if(!req.file) return res.render('/',{error: 'no file uploaded'});
      const result = await cloudUpload(req.file.buffer);
      console.log('uploaded to cloudinary')
      console.log(result);

   }catch(err){
      console.log(err)
   }
   //console.log(req.body.userId);
   //console.log(req.file);
   res.redirect('/');
 }

 export{
    uploadFile
 }
