export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculatedBill(): number;
}