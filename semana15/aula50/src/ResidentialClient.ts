import { Residence } from './Residence';
import { Client } from './Client';

class ResidencialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        public cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    };

    public getCep(): string {
        return this.cpf;
    };

    public calculatedBill(): number {
        return this.consumedEnergy * 0.75;
    };
};