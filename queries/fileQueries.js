import {prisma} from '../lib/prisma.js';


/* required queries
user based:
2.create new user

file  based:

C-  store new file in the db
R-  read existing file from db
U-  update existing file in db
D-  delete existing file from db
*/

//file management
async function prismaAddFile(fileObj){
    await prisma.file.create({
        data:{
            userId:         fileObj.userId, 
            originalName:   fileObj.originalName,      
            fileName:       fileObj.fileName,    
            mimeType:       fileObj.mimeType,          
            size:           fileObj.size,    //size is in bytes          
            path:           fileObj.path,
            folderId:       fileObj.folderId, //if provided saves file un
        }
    })
}
async function prismaGetFilesByUserId(userId) {
    return await prisma.file.findMany({where: {userId:  userId}});
}
async function prismaGetFilesByFolderId(folderId) {
    return await prisma.file.findMany({where: {folderId:  folderId}});
}
async function prismaGetFileById(id) {
    
}
async function prismaUpdateFile(id, update) {
    
}
async function prismaDeleteFile(id) {
    
}

export{
    prismaAddFile,
    prismaGetFilesByUserId,
    prismaGetFilesByFolderId,
    prismaGetFileById,
    prismaUpdateFile,
    prismaDeleteFile,
}