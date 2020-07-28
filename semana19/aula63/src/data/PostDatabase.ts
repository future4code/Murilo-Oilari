import { BaseDatabase } from "./BaseDatabase";

import dotenv from "dotenv";

dotenv.config();

export class PostDatabase extends BaseDatabase{

    private static TABLE_NAME = "Aula63_Post";

    public async create(
        id: string, 
        image: string, 
        description: string, 
        type: string, 
        userId: string
        ): Promise<void> {
        try {
            await this.getConnection()
            .insert({
                id,
                image,
                description,
                type,
                userId
            })
            .into(PostDatabase.TABLE_NAME);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async geById(id: string): Promise<any> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(PostDatabase.TABLE_NAME)
                .where({ id });

            return result[0];
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async deleteById(id: string): Promise<any> {
        await this.getConnection()
            .delete()
            .from(PostDatabase.TABLE_NAME)
            .where({ id });
    };
};