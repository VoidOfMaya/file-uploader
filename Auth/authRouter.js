import { Router } from "express";
import {createUser} from './authController.js';
import passport from "passport";
import {
    registery as validateSignup, 
    logIn     as validateLogin
}  from "../validations/validate.js";

const authRouter = Router();

authRouter.post('/register',validateSignup, createUser);
authRouter.post('/login', validateLogin, passport.authenticate('local',{successRedirect: '/', failureRedirect: '/'}));



export{
    authRouter,
}