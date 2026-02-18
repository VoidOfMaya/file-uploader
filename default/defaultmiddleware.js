import { prismaGetFilesByUserId } from "../queries/fileQueries.js";
import { prismaGetFoldersByUserId } from "../queries/folderQueries.js";

async function getGlobalData(userId){

    const files = await prismaGetFilesByUserId(Number(userId));
    const folders = await prismaGetFoldersByUserId(Number(userId)); 
    return {files, folders}
}

export{
    getGlobalData
}