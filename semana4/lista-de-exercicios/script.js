/** 
 * AULA 14
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
// const primeiroNumero = Number(prompt("1º número:"));
// const segundoNumero = Number(prompt("2º número:"));
// let primeiroMaior = false;
// let segundoMaior = false;

// if(primeiroNumero > segundoNumero) {
//     console.log("O maior é: " + primeiroNumero);
//     primeiroMaior = true;
// } else if(primeiroNumero < segundoNumero) {
//     console.log("O maior é: " + segundoNumero);
//     segundoMaior = true;
// } else {
//     console.log("Ambos são iguais: " + primeiroNumero + " e " + segundoNumero)
// }

// if(primeiroNumero % segundoNumero === 0) {
//     console.log(primeiroNumero + " é divisível por " + segundoNumero)
// } else {
//     console.log(primeiroNumero + " não é divisível por " + segundoNumero)
// }

// if(segundoNumero % primeiroNumero === 0) {
//     console.log(segundoNumero + " é divisível por " + primeiroNumero)
// } else {
//     console.log(segundoNumero + " não é divisível por " + primeiroNumero)
// }

// if(primeiroMaior) {
//     const diferenca = primeiroNumero - segundoNumero;
//     console.log("A diferença entre eles é " + diferenca);
// }

// if(segundoMaior) {
//    const diferenca = segundoNumero - primeiroNumero
//     console.log("A diferença entre eles é " + diferenca);
// }


/**
 *  AULA 15
 * 
 *  Exercícios de Funções
 *
 *  1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo 
 *  menor número. Em seguida, invoque essa função.
 */
function imprimeSegundoMaiorMenor(arrayRecebida) {
    let menorNumero = Infinity;
    let maiorNumero = 0;
    var indexMaior = 0;
    var indexMenor = 0;
    let segundoMenorNumero = Infinity;
    let segundoMaiorNumero = 0; 
    
    for(numero of arrayRecebida) {
        if(numero < menorNumero) {
            menorNumero = numero;
        }
        if(numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    let arrayTemporaria = arrayRecebida.map((elemento, index, array) => {
        if(elemento === maiorNumero) {
            indexMaior = index;
        }
        if(elemento === menorNumero) {
            indexMenor  = index;
        }
    })
    
    arrayTemporaria = arrayRecebida
    if(indexMaior > indexMenor) {
        arrayTemporaria.splice(indexMaior, 1)
        arrayTemporaria.splice(indexMenor, 1)
    } else if(indexMaior < indexMenor){
        arrayTemporaria.splice(indexMenor, 1)
        arrayTemporaria.splice(indexMaior, 1)
    }
    
    for(numero of arrayTemporaria) {
        if(numero < segundoMenorNumero) {
            segundoMenorNumero = numero;
        }
        if(numero > segundoMaiorNumero) {
            segundoMaiorNumero = numero;
        }
    }
}

 /**
 *  2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque 
 *  essa função.
 */
labenu = () => {
    return alert("Hello Future4");
}
labenu();

 /** 
 *  Exercícios de Objetos
 *  
 *  1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
 *  RESPOSTA: Arrays para a organizção de itens e objetos para que não fiquem avulsos no código facilitando 
 *  assim a organização, e objetos para guardar diversos parametros de uma determinada coisa ou item, ficando
 *  desta forma tudo agrupado.
 * 
 *  2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e 
 *  retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) 
 *  e área (`lado1 * lado2`).
 */
 function criaRetangulo(lado1, lado2) {
    console.log("largura: " + lado1);
    console.log("altura: " + lado2);
    console.log("perimetro: " + 2*(lado1 + lado2));
    console.log("area: " + (lado1 * lado2));
 }
 /** 
 *  3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, 
 *  ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, 
 *  baseada nos valores do objeto:
 *  `Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, 
 *  ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
 */
const melhorFilme = {
    titulo: "O labirinto do Fauno",
    ano: 2006,
    diretor: "Guillermo del Toro",
    atores: nomes = ["Ivana Baquero", "Sergi López", "Maribel Verdú", "Doug Jones"],
}

console.log("Venha assistir ao filme " + melhorFilme.titulo + " de " + melhorFilme.ano + ", dirigido por " + melhorFilme.diretor + " e estrelado por " + melhorFilme.atores + ".");

/**  
 *  4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. 
 *  Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, mas com a string 
 *  `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
 */
const pessoa = {
    nome: "Clóvis",
    idade: 19,
    email: "clo@bol.com.br",
    endereco: "rua logo ali, tv 1, casa 2",
    anonimizarPessoa: function() {
        const pessoaAnonimizada = {
            ...pessoa,
            nome: "ANÔNIMO"
        }
        return pessoaAnonimizada;
    }
}