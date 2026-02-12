import {prisma} from '../lib/prisma.js';
 //basic CRUD
//get all folders
async function prismaGetAllFolders(){

}
// get folder page by id
async function prismaGetFolderById(id) {
    
}
//post create folder
async function prismaCreateFolder(userId ,name) {
    
}
//post edit folder by id
async function prismaEditFolder(id,params) {
    
}

//post delete folder by id
async function prismaDeleteFolder(id) {
    
}

export{
    prismaCreateFolder,
    prismaGetAllFolders,
    prismaGetFolderById,
    prismaEditFolder,
    prismaDeleteFolder,
}