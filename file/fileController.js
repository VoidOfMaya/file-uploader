import {cloudUpload} from './cloudinary.service.js'
import http from 'http'
import https from 'https'
import { matchedData, validationResult } from 'express-validator';
import { prismaAddFile, prismaGetFileById } from '../queries/fileQueries.js';
 
async function uploadFile(req, res, next){
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
      // handles file upload from folder
      
      const id = req.body.folderId? Number(req.body.folderId) : null;

      //prisma takes a fileobj that has the following
      const fileObj ={
         userId :        req.user.id,
         originalName:   req.file.originalname,      
         fileName:       result.public_id,    
         mimeType:       req.file.mimetype,          
         size:           req.file.size,           
         path:           result.secure_url,
         folderId:       id             //implement folderid get if file is created inside a folder
      }
      await prismaAddFile(fileObj);
      console.log('added to db');
      
   }catch(err){
      next(err)
   }
   req.body.folderId? res.redirect(`/folders/${req.body.folderId}?`): res.redirect('/');
 }
async function downloadFile(req, res, next) {
   const fileId = Number(req.params.id);
   try{
      const file = await prismaGetFileById(fileId);
      res.setHeader('Content-Disposition', `attachement: filename="${file.originalName}"`);
      res.setHeader('Content-Type', "application/octet-stream");

       const cloudinaryUrl = file.path

       const client = cloudinaryUrl.startsWith('https')? https : http;

       client.get(cloudinaryUrl, (response)=>{
         response.pipe(res);
       }).on('error',(err)=>{
         console.log(err)
       })

   }catch(err){
      next(err)
   }
}
 export{
    uploadFile,
    downloadFile
 }
