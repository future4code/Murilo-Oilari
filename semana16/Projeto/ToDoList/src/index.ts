import knex from "knex";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";

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
            database: process.env.DB_NAME,
        },
});

const createUser = async (
    newName: string,
    newNickname: string,
    newEmail: string
): Promise<void> => {
    if (newName === "" || newNickname === "" || newEmail === "") {
        return console.log("Não pode haver campos sem preenchimento.");
    } else {
        await connection
            .insert({
                id: Math.floor(Math.random() * 1000000000),
                name: newName,
                nickname: newNickname,
                email: newEmail
            })
            .into("User");
    };
};

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT id, nickname FROM User WHERE id = '${id}'
    `);

    return result[0][0];
};

const updateUserNameNickname = async (
    id: string, 
    newName: string, 
    newNickname: string
): Promise<any> => {
    const result = await connection.raw(`
        UPDATE User 
        SET 
            name = "${newName}",
            nickname = "${newNickname}"
        WHERE id = "${id}"
    `);

    return result[0][0];
};

const createTask = async (
    newTitle: string,
    newDescription: string,
    newLimitDate: string,
	newCreatorUserId: string
): Promise<any> => {
    await connection
        .insert({
            id: Math.floor(Math.random() * 1000000000),
            title: newTitle,
            description: newDescription,
            limitDate: newLimitDate,
            creatorUserId: newCreatorUserId
        })
        .into("Task");
};

app.put("/user", async (req: Request, res: Response) => {
    try {
        await createUser(
            req.body.newName,
            req.body.newNickname,
            req.body.newEmail
        );
        res.status(200).send({
            message: "success!"
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    };
});

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);

        res.status(200).send({
            user
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    };
});

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await updateUserNameNickname(
            String(id),
            req.body.newName,
            req.body.newNickname
        );

        res.status(200).send({
            message: "success!"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    };
});

app.put("/task", async (req: Request, res: Response) => {
    try {
        await createTask(
            req.body.newTitle,
            req.body.newDescription,
            req.body.newLimitDate,
            req.body.newCreatorUserId
        );
        res.status(200).send({
            message: "success!"
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    };
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});