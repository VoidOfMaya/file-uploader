import { validationResult, matchedData } from "express-validator";

async function createUser(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()});
        return res.status(400).json({errors: errors.array()});
    }
    const data = matchedData(req);
    console.log(data)
}

export{
    createUser,
}