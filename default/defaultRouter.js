import { Router } from "express";
import getHomePage from "./defaultController.js";

const defaultRouter = Router();

defaultRouter.get('/', getHomePage);

export{
    defaultRouter
}