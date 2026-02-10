//import {cloudUpload} from './cloudinary.service.js'
import { prisma } from '../lib/prisma.js';
import { matchedData, validationResult } from 'express-validator';
 async function uploadFile(req, res){
   //first validate and mutate data

   //handle data upload:
   /*
   const data = matchedData(req);

   console.log(matchedData);
   if(!req.file){
      console.log('no file upload detected')
      res.redirect(302,'/')
   }
   try{
      const result = await cloudUpload(req.file.buffer);
      
   }catch(err){
      console.log(err)
   }
      */
   //console.log(req.user.id);
   console.log(req.body.userId);
   console.log(req.file);
   res.redirect('/');
 }

 export{
    uploadFile
 }
