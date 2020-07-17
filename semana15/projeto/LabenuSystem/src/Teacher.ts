import { User } from './User';

export class Teacher implements User {
    id: number = Math.floor(Math.random() * (999999999 - 111111111) + 111111111);
    name: string;
    email: string;
    birthday: string;
    private specialty: Specialty

    constructor(name: string, email: string, birthday: string, specialty: Specialty) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.specialty = specialty;
    };

    public getSpecialty(): Specialty {
        return this.specialty;
    };
};

export enum Specialty {
    REACT = "react",
    REDUX = "redux",
    CSS = "css",
    TESTES = "testes",
    TYPESCRIPT = "typescript",
    POO = "poo",
    BACKEND = "backend",
};