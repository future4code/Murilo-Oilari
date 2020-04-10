/** 
 * AULA 14 - DOM
 * 
 *  Exercícios de leitura de código
 *
 *  1. A função conversorDeMoeda é invocada com um parametro de número e recebe do prompt o valor do dolar 
 *  do dia na variável cotação, e retorna o valor informado na chamada da função X a cotação, desta forma 
 *  retornando em Reais o valor em Dollar.
 * 
 *  2. A função investeDinheiro()  recebe dois parametros: tipoDeInvestimento e valor, o primeiro sendo uma 
 *  String e o outro um Number.
 *  Ao ser invocada ela inicia a variavel valorAposInvestimento, não lhe atribuindo nenhum valor.
 *  Em seguida vem condicional switch usando como parametro o tipoDeInvestimento nos seguintes casos:
 *  Poupança onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.03; 
 *  Renda Fixa onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.05; 
 *  CDB onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.06; 
 *  Ações onde o valorAposInvestimento recebe o parametro valor que será multiplicado por 1.1; 
 *  Demais parametors caemno alerta default "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 *  Retorando assim o valorAposInvestimento
 *  Desta forma quando novoMontante usa a função e lhe passa os parametros "Acões, 150"
 *  e segundoMontante "Tesouro Direto, 200" terão as segintes respostas respctivas: 165 e "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 * 
 *  3. 3 Arrays são inicializadas, sendo "numeros" preenchida com numeros e array1 e array2 vazias.
 *  em sequncia o comando for percorre a Array "numeros" e copia para a array1 os pares e para a array2 os ímpares.
 *  imprimindo abaixo a quantidade de números em cada Array:
 *  numeros = 14;
 *  array1 = 6;
 *  array2 = 8;
 * 
 *  4. São iniciadas uma Array "numeros" com diversos números, e duas constatantes, "numero1" e "numero2" contendo "Infinity" e "0" 
 *  respctivamente.
 *  A seguir é iniciado um "for" criando a variável "numero" e percorrendo a Array "numeros";
 *  Se um "numero" for menor que "numero1" (neste inicio um número positivo maior que todos), então ao "numero1" é atribuido o valor de "numero"
 *  (neste inicio o número 25), desta forma o "numero" irá preencher "numero1" sempre com o menor número percorrido pelo "for" na Array.
 *  Se um "numero" for maior que "numero2" (neste inicio o numero zero), então ao "numero2" é atribuido o valor de "numero" (neste inicio o 
 *  número 25), desta forma o "numero" irá preencher "numero2" sempre com o maior número percorrido pelo "for" na Array.
 * 
 */

 /**
  * Exercícios de lógica de programação
  * 
  * 1. Para este exercício considere as seguintes variáveis:
  * const booleano1 = true
  * const booleano2 = false
  * const booleano3 = !booleano2
  * const booleano4 = !booleano3
  * 
  * Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:
  *  
  * a) `booleano1 && booleano2 && !booleano4`
  * RESPOSTA: false
  * 
  * b) `(booleano1 && booleano2) || !booleano3`
  * RESPOSTA: true
  * 
  * c) `(booleano2 || booleano3) && (booleano4 || booleano1)`
  * RESPOSTA: true
  * 
  * d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
  * RESPOSTA: true
  * 
  * e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
  * RESPOSTA: true
  * 
  * 2. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares 
  * (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse 
  * que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:
  *
  * const quantidadeDeNumerosPares
  * let i = 0
  * while(i <= quantidadeDeNumerosPares) {
  *     console.log(i*2)
  * }
  *
  *  Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
  * RESPOSTA: O código acima não funciona pois não há valor declarado para "quantidadeDeNumerosPares", e quando este número é declarado
  * é necessário por um contador "i += 1" dentro do "while" para que não fique em looping infnito. E para finalizar no "console.log" onde
  * é feito o cálculo para compensar a primeira inicialização do "i" e diminuido 2 para que o resultado se inicie em 0 (zero).
  * 
  */
const quantidadeDeNumerosPares = 5;
let i = 0
while(i < quantidadeDeNumerosPares) {
    i += 1;
    console.log(i*2-2)
}
/**
 *  3. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. 
 *  Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do 
 *  tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois 
 *  (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". 
 *  Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, 
 *  isósceles ou escaleno.
 */
function tipoTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC) {
        console.log("Equilátero")
    } else if(ladoA === ladoB && ladoA !== ladoC || 
              ladoA === ladoC && ladoA !== ladoB ||
              ladoB === ladoC && ladoB !== ladoA) {
        console.log("Isósceles")
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log("Escaleno")
    }
}
/**
 *  4. Faça um programa que, dados dois números,
 *  i. indique qual é o maior,
 *  ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e
 *  iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
 */
const primeiroNumero = Number(prompt("1º número:"));
const segundoNumero = Number(prompt("2º número:"));
let primeiroMaior = false;
let segundoMaior = false;

if(primeiroNumero > segundoNumero) {
    console.log("O maior é: " + primeiroNumero);
    primeiroMaior = true;
} else if(primeiroNumero < segundoNumero) {
    console.log("O maior é: " + segundoNumero);
    segundoMaior = true;
} else {
    console.log("Ambos são iguais: " + primeiroNumero + " e " + segundoNumero)
}

if(primeiroNumero % segundoNumero === 0) {
    console.log(primeiroNumero + " é divisível por " + segundoNumero)
} else {
    console.log(primeiroNumero + " não é divisível por " + segundoNumero)
}

if(segundoNumero % primeiroNumero === 0) {
    console.log(segundoNumero + " é divisível por " + primeiroNumero)
} else {
    console.log(segundoNumero + " não é divisível por " + primeiroNumero)
}

if(primeiroMaior) {
    const diferenca = primeiroNumero - segundoNumero;
    console.log("A diferença entre eles é " + diferenca);
}

if(segundoMaior) {
   const diferenca = segundoNumero - primeiroNumero
    console.log("A diferença entre eles é " + diferenca);
}
