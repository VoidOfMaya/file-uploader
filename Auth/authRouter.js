import { Router } from "express";
import { registery } from "../validations/validate";
import { createUser } from './authController';

const authRouter = Router();

authRouter.post('/register',registery, createUser);