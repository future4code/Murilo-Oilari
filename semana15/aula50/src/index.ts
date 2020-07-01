import { Client } from './Client';

import {Place} from './Place';

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculatedBill:() => {
        return 2
    }
}

//const newPlace: Place = new Place("ffffff");

/* 
Exec 01
a. Quais propriedades você conseguiu imprimir? 
Teve alguma que não foi possível? Por que isso aconteceu?
.name / .registrationNumber / .consumedEnergy / .calculatedBill()
b. todos eram publicos
*/

/*
Exec 02
a. *Mesmo sabendo que não é possível, tente criar uma instância dessa 
classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?
"Cannot create an instance of an abstract class"
b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente 
criar uma instância dessa classe?
*/
console.log(client);
console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculatedBill());

const main = () => {
    try {
        
    } catch (err) {
        console.error(err);
    };
};

main();