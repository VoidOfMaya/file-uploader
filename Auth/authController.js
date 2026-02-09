import { validationResult, matchedData } from "express-validator";
import bcrypt from 'bcryptjs';

async function createUser(req, res){
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
            //await postgres.addMember(secureData);
            //console.log(`Registration success`);
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
    console.log(data);
    res.redirect('/')
}

export{
    createUser,
}