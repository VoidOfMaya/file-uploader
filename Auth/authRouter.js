import { Router } from "express";
import {registery}  from "../validations/validate.js";
import {createUser} from './authController.js'

const authRouter = Router();

authRouter.post('/register',registery, createUser);


export{
    authRouter,
}