// EXERCÍCIO 1

// Leia o código abaixo:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)
    
if(numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
*/
/* Explique o que o código faz.
Qual o teste que ele realiza?
Para que tipos de números ele imprime no console "Passou no teste"? 
Para que tipos, a mensagem é "Não passou no teste"? */

// RESPOSTA
/* Ele valida números pares, dividindo um número digitado por 2, pegando seu resto e comparando a 0 (zero).
ele imprime "Passou no teste" a todos os números pares, e exibe "Não passou no teste" a todos os números impares */



// EXERCÍCIO 2

/* O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar 
algumas tarefas de um supermercado. Veja abaixo: */
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        //break; // BREAK PARA O ITEM d.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
/*
a. Para que serve o código acima?
Serve para consultar o preço de frutas.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
>>> O preço da fruta  Maçã  é  R$  2.25

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
R$ 24.55

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo 
acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
>>> O preço da fruta  Pêra  é  R$  5

*/


// EXERCÍCIO 3

// Leia o código abaixo:

/*
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")
    
if(numero1 > 0 && numero2 > 0) {
    let mensagem
    if(numero1 > numero2) {
        mensagem = "Número 1 é maior que o 2!"
    } else {
        mensagem = "Número 1 é menor ou igual ao 2!"
    }
}
    
console.log(mensagem)*/

/*
Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? 
Justifique usando os conceitos de bloco ou escopo.
*/


// RESPOSTA

/*
Aparece a seguite mensagem de erro:
Uncaught ReferenceError: mensagem is not defined
    at index.js:84
(anonymous) @ index.js:84

o motivo é que "let" com a variável mensagem não está no mesmo bloco, e assim
não faz parte do escopo da mensagem a ser exibida no segundo "if".
let não permite que a variável seja vista em outro escopo.
*/


// Exercícios de escrita de código

//EXERCÍCIO 4

// a.
/*
const numA = prompt("Insira o 1º número:");
const numB = prompt("Insira o 2º número:");

if(numA === numB) {
    console.log("O números digitados são iguais: " + numA + " e " + numB + ".");
}else if(numA > numB) {
    console.log(numB + "\n" + numA);
}else if(numB > numA) {
    console.log(numA + "\n" + numB);
}else {
    console.log("Desculpe, ocorreu algum erro!");
}
*/

// b. 
/*
const numA = Number(prompt("Insira o 1º número:"));
const numB = Number(prompt("Insira o 2º número:"));
const numC = Number(prompt("Insira o 3º número:"));

const testAB = numA === numB;
const testAC = numA === numC;
const testBC = numB === numC;

const comparacaoAB = numA > numB; 
const comparacaoAC = numA > numC;
const comparacaoBC = numB > numC;

 
if(testAB == true && testAC == true && testBC === true) {
    console.log("Todos os números digitados são iguais. " + numA + " / " + numB + " / " + numC);
}else {
    if(comparacaoAB && comparacaoAC) {
        if(comparacaoBC) {
            console.log(numA + "\n" + numB + "\n" + numC);
        }else {
            console.log(numA + "\n" + numC + "\n" + numA);
        }
    }else if(!comparacaoAC && !comparacaoBC) {
        if(comparacaoAB) {
            console.log(numC + "\n" + numA + "\n" + numB);
        }else {
            console.log(numC + "\n" + numB + "\n" + numA);
        }
    }else if(comparacaoAC) {
        console.log(numB + "\n" + numA + "\n" + numC);
    }else if(!comparacaoAC){
        console.log(numB + "\n" + numC + "\n" + numA);
    }else {
        console.log("Todos os números inseridos são iguais, " + numA + " e " + numB + " e " + numC + ".");
    }
}
*/

// .c
/*
const numA = Number(prompt("Insira o 1º número:"));
var numB = Number(prompt("Insira o 2º número:"));
if(numB === numA) {
    var numB = Number(prompt("Número digitado igual ao anterior, insira o 2º número novamente:"));
}
var numC = Number(prompt("Insira o 3º número:"));
if(numC === numB || numC === numA) {
    var numC = Number(prompt("Número digitado igual a um dos anterioes, insira o 3º número novamente:"));
}

const testAB = numA === numB;
const testAC = numA === numC;
const testBC = numB === numC;

const comparacaoAB = numA > numB; 
const comparacaoAC = numA > numC;
const comparacaoBC = numB > numC;

 
if(testAB == true && testAC == true && testBC === true) {
    console.log("Todos os números digitados são iguais. " + numA + " / " + numB + " / " + numC);
}else {
    if(comparacaoAB && comparacaoAC) {
        if(comparacaoBC) {
            console.log(numA + "\n" + numB + "\n" + numC);
        }else {
            console.log(numA + "\n" + numC + "\n" + numA);
        }
    }else if(!comparacaoAC && !comparacaoBC) {
        if(comparacaoAB) {
            console.log(numC + "\n" + numA + "\n" + numB);
        }else {
            console.log(numC + "\n" + numB + "\n" + numA);
        }
    }else if(comparacaoAC) {
        console.log(numB + "\n" + numA + "\n" + numC);
    }else if(!comparacaoAC){
        console.log(numB + "\n" + numC + "\n" + numA);
    }else {
        console.log("Todos os números inseridos são iguais, " + numA + " e " + numB + " e " + numC + ".");
    }
}
*/