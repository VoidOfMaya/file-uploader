import { prismaGetFiles } from "../queries/queries.js"

//gets all available folders and files owned by user
export default async function getHomePage(req, res){
    let files;
    if(req.user){
        files = await prismaGetFiles(Number(req.user.id));
    }
    res.render('homepage',{user: req.user, files: files})
} 