import { prismaCreateFolder, prismaGetFolderById, prismaEditFolder, prismaDeleteFolder } from "../queries/folderQueries.js";
import { validationResult, matchedData } from "express-validator";

async function createFolder(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        req.flash('errors', errors.array());
        return res.redirect('/')
    }
    const data = matchedData(req);
    try{
        await prismaCreateFolder(Number(req.user.id), data.folderName)// takes user id and folder name; 
        console.log('folder creation success');       
    }catch(err){
        next(err)
    }


    res.redirect('/');
}
async function getFolderById(req, res, next) {
    const folderId = req.params.id;
    try{
        const data = await prismaGetFolderById(Number(folderId));
        res.render('folderpage',{user: req.user, folder: data })
    }catch(err){
        next(err)
    }
    
}
async function editFolder(req, res, next) {

    const data = req.body
    try{
        await prismaEditFolder( Number(data.folderId),data.folderName) ;
        res.redirect(`/folders/${data.folderId}?`);       
    }catch(err){
        next(err)
    }

}
async function DeleteFolder(req, res, next) {
    const folderId = Number(req.body.folderId)
    try{
        await prismaDeleteFolder(folderId)
        console.log('deleted folder')
    }catch(err){
        next(err)
    }
    res.status(200).json({success: true});
}

export{
    createFolder,
    getFolderById,
    editFolder,
    DeleteFolder
}