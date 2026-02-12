import {prisma} from '../lib/prisma.js';

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

export{
    prismaAddUser,
}