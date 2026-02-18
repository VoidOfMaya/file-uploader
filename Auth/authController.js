import { validationResult, matchedData } from "express-validator";
import bcrypt from 'bcryptjs';
import { prismaAddUser } from "../queries/userQueries.js";

async function actionCreateUser(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()});
        return res.status(400).json({errors: errors.array()});
    }
    const data = matchedData(req);
    try{
        const parsedData = {
            firstName: data.firstName,
            lastName: data.lastName, 
            username: data.username, 
            password: await bcrypt.hash(data.password, 10),
        };
        await prismaAddUser(parsedData);
        console.log(`Registration success`);
    }catch(err){
        next(err);
    }
    res.redirect('/')
}
async function actionLogout(req, res, next) {
    req.logout(err=>{
        err ? next(new Error(`passport logout error`)): req.session.destroy(err =>{
            if(err){
                return next(new Error(`session destroy error: ${err}`));
            };
            res.clearCookie('connect.sid');
            res.redirect('/');
            })
    })
    
}

export{
    actionCreateUser,
    actionLogout,
}