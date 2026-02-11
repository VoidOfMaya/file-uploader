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
//user management
async function prismaAddUser(userObj){
    await prisma.user.create({
        data:{
            firstName: userObj.firstName,
            lastName:  userObj.lastName,
            username:  userObj.username,
            password:  userObj.password,
        }
    })
}
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
        }
    })
}
async function prismaGetFiles(ownerId) {
    return await prisma.file.findMany({where: {userId:  ownerId}});
}

export{
    prismaAddUser,
    prismaAddFile,
    prismaGetFiles
}