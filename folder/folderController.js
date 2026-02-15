import { prismaCreateFolder, prismaGetFolderById, prismaEditFolder, prismaDeleteFolder } from "../queries/folderQueries.js";
import { validationResult, matchedData } from "express-validator";

async function folders(req, res){
    res.redirect('/');
}
async function createFolder(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array())
        res.redirect('/')
    }
    const data = matchedData(req);
    try{
        await prismaCreateFolder(Number(req.user.id), data.folderName)// takes user id and folder name; 
        console.log('folder creation success');       
    }catch(err){
        console.log(err)
    }


    res.redirect('/');
}
async function getFolderById(req, res) {
    const folderId = req.params.id;
    try{
        const data = await prismaGetFolderById(Number(folderId));
        res.render('folderpage',{user: req.user, folder: data })
    }catch(err){
        console.log(err)
    }
    
}
async function editFolder(req, res) {

    const data = req.body
    try{
        await prismaEditFolder( Number(data.folderId),data.folderName) ;
        res.redirect(`/folders/${data.folderId}?`);       
    }catch(err){
        console.log(err)
    }

}
async function DeleteFolder(req, res) {
    const folderId = Number(req.body.folderId)
    try{
        await prismaDeleteFolder(folderId)
        console.log('deleted folder')
    }catch(err){
        console.log(err)
    }
    res.status(200).json({success: true});
}

export{
    folders,
    createFolder,
    getFolderById,
    editFolder,
    DeleteFolder
}