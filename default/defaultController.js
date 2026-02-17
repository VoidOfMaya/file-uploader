
import { prismaGetFilesByUserId } from "../queries/fileQueries.js"
import { prismaGetFoldersByUserId } from "../queries/folderQueries.js";

//gets all available folders and files owned by user
export default async function getHomePage(req, res, next){
    let files;
    let folders
    if(req.user){
        try{
          files = await prismaGetFilesByUserId(Number(req.user.id));
          folders = await prismaGetFoldersByUserId(Number(req.user.id)); 
        }catch(err){
            return next(err)
        }     
    }
   const childFiles = (files ?? []).filter(f => f.folderId === null);
    //only showes files who lack a parent folder!
    res.render('homepage',{user: req.user, files: childFiles, folders: folders})
} 