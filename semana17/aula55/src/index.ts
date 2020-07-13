import knex from 'knex';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import { IdGenerator } from './services/IdGenerator';

import { AddressInfo } from 'net';
import { UserDatabase } from './data/UserDatabase';
import { Authenticator } from './services/Authenticator';

dotenv.config();

const app = express();

app.use(express.json());

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

/* const userTableName = 'User';

const createUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(userTableName);
    }; */

 

//const foo = new UserDatabase().createUser("050", "Bleus Asimov","tobor");
/* const foo = new UserDatabase().getUserByEmail("02");
console.log(foo)
 */

app.post('/signup', async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf('@') === -1) {
            throw new Error('Invalid Email');
        };

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error('Invalid Password')
        };

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const idGenerator =  new IdGenerator();
        const id = idGenerator.generate();

        const userDb = new UserDatabase();
        await userDb.createUser(id, userData.email, userData.password);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id
        });

        res.status(200).send({
            token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

app.post("/login", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        };

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(userData.email);

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        };

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id,
        });

        res.status(200).send({
            token,
        });
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    };
});