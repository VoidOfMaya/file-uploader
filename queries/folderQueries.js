import {prisma} from '../lib/prisma.js';
 //basic CRUD
//get all folders
async function prismaGetFoldersByUserId(userId){
    return await prisma.folder.findMany({where: {userId:  userId}});
}
// get folder page by id
async function prismaGetFolderById(id) {
    return await prisma.folder.findUnique({where:{id}})
}
//post create folder
async function prismaCreateFolder(userId ,name) {
    await prisma.folder.create({
        data:{
            name:      name,
            userId:    userId,
        }
    })
}
//post edit folder by id
async function prismaEditFolder(id,update) {
     await prisma.folder.update({
        where: {id},
        data: update
    })
}

//post delete folder by id
async function prismaDeleteFolder(id) {
    await prisma.folder.delete({where:{id}})
}

export{
    prismaCreateFolder,
    prismaGetFoldersByUserId,
    prismaGetFolderById,
    prismaEditFolder,
    prismaDeleteFolder,
}