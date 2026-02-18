import express from 'express';
import path from 'node:path';
import flash from 'connect-flash';
import { fileURLToPath } from 'node:url';
import'dotenv/config';

import {defaultRouter}  from './default/defaultRouter.js';
import {authRouter} from './Auth/authRouter.js'
import { setSession, setPassport, checkAuth } from './Auth/authMidWare.js';
import passport from 'passport';
import { fileRouter } from './file/fileRouter.js';
import { folderRouter } from './folder/folderRouter.js';


//setup basic server
const app = express(()=>{
    console.log('server booting...');
});

// generic asset and ejs setup 
//the following 2 lines are esm specific(dirname is only implicit in common.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up static assets in ane xpress env
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

//parse form data to a request body
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//setup passport and session

setSession(app)

setPassport();
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//appends errorMsg locals globaly
app.use((req, res, next) =>{
    //res.locals.errors =  req.flash('errors')[0] || null;
    res.locals.user = req.user || null;
    res.locals.files =[], 
    res.locals.folders =[],
    res.locals.validationErr = null
    next();

})
//router setup
app.use('/', defaultRouter); //protected: has authcheck integrated within controller logic 
app.use('/auth',authRouter);
app.use('/upload',checkAuth,fileRouter);// protected
app.use('/folders',checkAuth,folderRouter);//protected

//error handelling routes

app.use((req, res)=>{
    res.status(404).render('404')
})
// global server error
app.use((err, req,res, next)=>{
    console.error(err.stack);
    res.status(500).render('500',{errorMsg: err})
})

//listining setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})