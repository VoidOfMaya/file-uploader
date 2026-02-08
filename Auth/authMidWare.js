import expressSession from 'express-session';
import {PrismaPg} from '@prisma/adapter-pg';
import {PrismaClient} from '../generated/prisma/client.js';
import {PrismaSessionStore} from '@quixo3/prisma-session-store'
import 'dotenv/config';

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString});
const prisma = new PrismaClient({adapter});

function startSession(){
    expressSession({
        cookie:{
            maxAge:7 * 24 * 60 * 60 * 1000 //lasts a week
        },
        secret: 'an elf on the shelf',
        resave: true,
        saveUninitialized: true,
        store: new PrismaSessionStore(
            Prisma,
            {
                checkPeriod: 2 * 60 * 1000, //checks every 2 minutes
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
}

export{
    startSession,
}