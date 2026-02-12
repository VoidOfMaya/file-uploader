import { prismaCreateFolder } from "../queries/folderQueries.js";
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

export{
    folders,
    createFolder,
}