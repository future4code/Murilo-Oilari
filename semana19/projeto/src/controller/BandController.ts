import { Request, Response } from "express";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";

export class BandController {
    async create(req: Request, res: Response) {
        try {
            /* const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.getData(token);

            
            const userDatabase = new UserDatabase();
            const user = await userDatabase.getById(authenticationData.id);
            
            if(user.getRole() !== "ADMIN") {
                throw new Error("Access denied");
                
            }
            
            const adminName: string = user.getName(); */

            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre
            }

            const band = await new BandBusiness().create(input);

            res.status(200).send({ band });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    };
};