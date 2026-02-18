import expressSession from 'express-session';
import {PrismaPg} from '@prisma/adapter-pg';
import {PrismaClient} from '../generated/prisma/client.js';
import {PrismaSessionStore} from '@quixo3/prisma-session-store';
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

import {prisma} from '../lib/prisma.js';

function setSession(app){
    app.use(expressSession({
        cookie:{
            maxAge:7 * 24 * 60 * 60 * 1000 //lasts a week
        },
        secret: 'an elf on the shelf',
        resave: false,
        saveUninitialized:false,
        store: new PrismaSessionStore(
            prisma,
            {
                sessionModelName:'Session',
                tabelName:'sessions',
                checkPeriod: 2 * 60 * 1000, //checks every 2 minutes
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
)

}
//passport local strategy 
function setPassport(){
passport.use(
    new LocalStrategy(async(username, password, done)=>{
        try{
            const user = await prisma.user.findUnique({where: {username}});          
            if(!user){
                return done(null, false,{message: 'Incorrect username'});
            }
            const match = await bcrypt.compare(password, user.password);

            if(!match){
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        }catch(err){
            return done(err);
        }
    })
)
passport.serializeUser((user,done)=>{
    done(null, user.id);
});
passport.deserializeUser(async(id, done)=>{
    try{

        const user = await prisma.user.findUnique({where:{id}});
        done(null, user);
    }catch(err){
        done(err);
    }
});
}
function checkAuth (req, res, next){
    if(!req.user){
        req.flash('errors', 'Access Denied!');
        return res.redirect('/')
    }
    next();
}
export{
    setSession,
    setPassport,
    checkAuth,
}