import { validationResult, matchedData } from "express-validator";
import bcrypt from 'bcryptjs';
import { prismaAddUser } from "../queries/queries.js";
import passport from "passport";

async function actionCreateUser(req, res){
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
            console.log(parsedData);
            await prismaAddUser(parsedData);
            console.log(`Registration success`);
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
    res.redirect('/')
}
async function actionLogout(req, res) {
    req.logout(err=>{
        err ? console.log(`passport logout error`): req.session.destroy(err =>{
            if(err){
                console.lofg(`session destroy error: ${err}`);
                return
            };
            es.clearCookie('connect.sid');
            res.redirect('/');
            })
    })
    
}

export{
    actionCreateUser,
    actionLogout,
}