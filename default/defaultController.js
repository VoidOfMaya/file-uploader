import { prismaGetFiles } from "../queries/queries.js"

export default async function getHomePage(req, res){
    let files;
    if(req.user){
        files = await prismaGetFiles(Number(req.user.id));
    }
    res.render('homepage',{user: req.user, files: files})
} 