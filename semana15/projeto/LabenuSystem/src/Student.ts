import { User } from './User';

export class Student implements User {
    id: number = Math.floor(Math.random() * (999999999 - 111111111) + 111111111);
    name: string;
    email: string;
    private birthday: string;
    private hobby: string[];

    constructor(name: string, email: string, birthday: string, hobby: string[]) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.hobby = hobby;
    };

    public getBirthday(): string {
        return this.birthday
    };

    public getHobby(): string[] {
        return this.hobby
    };
};