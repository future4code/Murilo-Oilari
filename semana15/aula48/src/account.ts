import {Transaction} from './transaction'

export class Account {
    private clientName: string
    private birthday: string
    private cpf: string
    private balance: number = 0
    private transaction: Transaction[] = []

    constructor(newName: string, newBirthday: string, newCpf: string){
        this.clientName = newName
        this.birthday = newBirthday
        this.cpf = newCpf
    };

    //public getClientName = (): string => this.clientName

    public getBalance(): number {
        return this.balance
    };

    public setBalance(newValor: number): number {
        return this.balance += newValor
    };

    public getBankStatement(): Transaction[] {
        return this.transaction
    };
};