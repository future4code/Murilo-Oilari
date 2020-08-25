import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { Request } from "express";
import { UserDatabase } from "../data/UserDatabase";

export class BandBusiness {
    private bandDatabase = new BandDatabase();
    private idGenerator = new IdGenerator();
    private authenticator = new Authenticator();

    async create(band: BandInputDTO, req: Request) {
        const token = req.headers.authorization as string;

        const authenticationData = this.authenticator.getData(token);

        const user = await new UserDatabase().getById(authenticationData.id);
            
        if(user.getRole() !== "ADMIN") {
            throw new Error("Access denied");        
        };
            
        const adminName: string = user.getName();

        const id = this.idGenerator.generate();
        await this.bandDatabase.create(
            id, 
            band.name, 
            band.music_genre, 
            adminName
        );
        return band;
    };
};