// Exercícios de interpretação de código

// EXERCÍCIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console? 

//     let sum = 0
//     for(let i = 0; i < 15; i++) {
//       sum += i
//     }
//     console.log(sum)

// RESPOSTA:
// Ele está somando todos os números inteiros de 0 a 14, o resultado no console é 105.



// EXERCÍCIO 2

// Leia o código abaixo:

//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     const novaLista = []
//     const numero = 5
//     for(const item of lista){
//       if(item%numero === 0) {
//         novaLista.push(item)
//       }
//     }
//     console.log(novaLista)

// a. O que o comando `.push` faz?
//RESPOSTA: ele adiciona um item numa lista.

// b. Qual o valor impresso no console?
//RESPOSTA: [10, 15, 25, 30]

// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? 
//      E se tivesse o valor de `4`?
//RESPOSTA: [12, 15, 18, 21, 27, 30] coso o valor fosse 3 e [12] caso fosse o valor 4.



// Exercícios de escrita de código

// EXERCÍCIO 3

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. 
// Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// a. Escreva um programa que devolva o maior e o menor números contidos no array original

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

// Exemplos do que o código tem que fazer em cada item:

//     // Este array será usado para exemplificar as respostas de todos os itens
//     const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
//     // Resposta a.
//     "O maior número é 130 e o menor é 21"
    
//     // Resposta item b.
//     [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]
    
//     // Resposta item c.
//     [80, 30, 130, 40, 60, 70, 120, 90, 110] 
    
//     // Resposta item d.
//     [ 'O elemento do índex 0 é 80',
//       'O elemento do índex 1 é 30',
//       'O elemento do índex 2 é 130',
//       'O elemento do índex 3 é 40',
//       'O elemento do índex 4 é 60',
//       'O elemento do índex 5 é 21',
//       'O elemento do índex 6 é 70',
//       'O elemento do índex 7 é 120',
//       'O elemento do índex 8 é 90',
//       'O elemento do índex 9 é 103',
//       'O elemento do índex 10 é 110',
//       'O elemento do índex 11 é 55' ]


// Array usada nos exercícios abaixo.
// const arrayOriginal = [67, 50, 63, 80, 852, 85, 7, 87, 96, 105, 42, 12, 753, 5, 9, 15];


// // a.
// let maior = [0];
// let menor = [999];

// for(let i = 0; i < arrayOriginal.length; i++) {
//     const elemento = arrayOriginal[i];
//     if(elemento > maior){
//         maior = elemento;
//     } 
// }
// for(let i = 0; i < arrayOriginal.length; i++) {
//     const elemento = arrayOriginal[i];
//     if(elemento < menor){
//         menor = elemento;
//     } 
// }
// console.log("Resposta a.");
// console.log("O maior número é " + maior + " e o menor é " + menor);


// // b.
// let arrayPorDez = [];

// for(num in arrayOriginal) {
//     let porDez = arrayOriginal[num] / 10;
//     arrayPorDez.push(porDez);
// }
// console.log("Resposta b.")
// console.log(arrayPorDez);


// // c.
// let arrayPar = [];

// for(let i = 1; i < arrayOriginal.length; i++) {
//     if(i % 2 === 0) {
//         arrayPar.push(i);
//     }
// }
// console.log("Resposta c.")
// console.log(arrayPar);


// // d.
// console.log("Resposta d.")
// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log("O elemento do índex " + i + " é: " + arrayOriginal[i]);
// }



//     DESAFIO 1

//     Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 

//         const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//         let quantidadeAtual = 0
//         while(quantidadeAtual < quantidadeTotal){
//           let linha = ""
//           for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//             linha += "0"
//           }
//           console.log(linha)
//           quantidadeAtual++
//         }

// RESPOSTA: o resultado a baixo
// 0
// 00
// 000
// 0000



// DESAFIO 2

//     Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". 
// Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
//A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número 
//fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. 
//Veja, abaixo, um exemplo de partida:

//         Vamos jogar!
//         O número chutado foi: 3
//         Errrrrrrrou, é maior
//         O número chutado foi: 18
//         Errrrrrrrou, é menor
//         O número chutado foi: 15
//         Errrrrrrrou, é menor
//         O número chutado foi: 11
//         Acertou!!
//         O número de tentativas foi: 4 
        

//     Um resumo das funcionalidades são:

//     - Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a 
//mensagem `Vamos jogar!`
//     - A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. 
//A cada chute, deve ser informado no console:
//         - O número chutado, com a mensagem: `O número chutado foi: <número>`
//         - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. 
//O número escolhido é maior/menor`
//     - Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, 
//`O número de tentativas foi : <quantos chutes o usuário deu>`
//     - OBS

//         Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, mas lembrem-se de cobrir 
//todos os casos pedidos!

// console.log("- - Adivinhe o número que estou pensando - -");
// const numero = Number(prompt("1º jogador insere o número a ser descoberto:"));
// console.log("Vamos jogar!");
// let tentativa = Number();
// let contador = 0;

// console.log("Agora o jogador tentará adivinhar!!!");
// while(numero !== tentativa) {
//     contador = contador + 1;
//     tentativa = Number(prompt("2º jogador tenta descobrir:"));
//     if(tentativa > numero) {
//         console.log(tentativa + " - Errou! chutou um número maior");
//     }else if(tentativa < numero) {
//         console.log(tentativa + " - Errou! chutou um número menor");
//     }
// }

// console.log("Acertou!!!");
// console.log("Nº de fracassos antes de acertar: " + contador);


//     DESAFIO 3

//     Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas 
// independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que 
// você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu 
// adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório 
// (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais 
// funcionalidades e mensagens pedidas no exercício anterior.

//     Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? 
// O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta 
// reflexão.**

// console.log("- - Adivinhe o número que estou pensando - -");
// console.log("O robot'O já escolheu seu nº");
// const numRobo = Math.floor(Math.random() * (100 - 1) + 1);
// console.log("São nº de 0 a 100, Vamos jogar!");
// let chance = Number();
// let cont = 0;

// console.log("Você é capaz de adivinhar!?");
// while(numRobo !== chance) {
//     cont = cont + 1;
//     chance = Number(prompt("Jogador tenta descobrir:"));
//     if(chance > numRobo) {
//         console.log(chance + " - Errou! chutou um número maior");
//     }else if(chance < numRobo) {
//         console.log(chance + " - Errou! chutou um número menor");
//     }
// }

// console.log("Acertou!!!");
// console.log("Nº de fracassos antes de acertar: " + cont);