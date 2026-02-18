import { Router } from "express";
import {actionCreateUser, actionLogout} from './authController.js';
import passport from "passport";
import {
    registery as validateSignup, 
    logIn     as validateLogin
}  from "../validations/validate.js";

const authRouter = Router();

authRouter.post('/register',validateSignup, actionCreateUser);
authRouter.post('/login', validateLogin, passport.authenticate('local',{successRedirect: '/', failureRedirect: '/',failureFlash: true}));
authRouter.get('/logout', actionLogout);



export{
    authRouter,
}