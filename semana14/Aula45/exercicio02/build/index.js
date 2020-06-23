const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
switch (operation) {
    case 'add':
        const resultAdd = (num1 + num2);
        console.log("Resposta: ", resultAdd);
        break;
    case 'sub':
        const resultSub = (num1 - num2);
        console.log("Resposta: ", resultSub);
        break;
    case 'mult':
        const resultMult = (num1 * num2);
        console.log("Resposta: ", resultMult);
        break;
    case 'div':
        const resultDiv = (num1 / num2);
        console.log("Resposta: ", resultDiv);
        break;
    default:
        console.log("não foi possível calcular");
        break;
}
//# sourceMappingURL=index.js.map