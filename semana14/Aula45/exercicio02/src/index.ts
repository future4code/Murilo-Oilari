//a.
const operation: string = process.argv[2];
const num1: number = Number(process.argv[3]);
const num2: number = Number(process.argv[4]);

switch (operation) {
    case 'add':
        const resultAdd: number = (num1 + num2);
        console.log("Resposta: ", resultAdd);
        break;
    case 'sub':
        const resultSub: number = (num1 - num2);
        console.log("Resposta: ", resultSub);
        break;
    case 'mult':
        const resultMult: number = (num1 * num2);
        console.log("Resposta: ", resultMult);
        break;
    case 'div':
        const resultDiv: number = (num1 / num2);
        console.log("Resposta: ", resultDiv);
        break;
    default:
        console.log("não foi possível calcular");
        break;
}