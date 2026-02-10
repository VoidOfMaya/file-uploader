import {prisma} from '../lib/prisma.js';


/* required queries
user based:
1.get user if exists
2.create new user

file  based:

C-  store new file in the db
R-  read existing file from db
U-  update existing file in db
D-  delete existing file from db
*/
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