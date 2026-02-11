import { prismaGetFiles } from "../queries/queries.js"

export default async function getHomePage(req, res){

    const files = await prismaGetFiles(Number(req.user.id));
    res.render('homepage',{user: req.user, files: files})
} 