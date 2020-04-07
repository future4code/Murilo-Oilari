// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// Leia o código abaixo:

//     const minhaFuncao = (quantidade) => {
//     	const array = []
//     	for(let i = 0; i < quantidade; i+=2) {
//     			for(let j = 0; j < i; j++) {
//     				array.push(j)
//     			}
//     	}
//     	return array
//     }

// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
//RESPOSTA: "[]" conchetes vazios.

// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
//RESPOSTA: "[ 0, 1, 0, 1, 2, 3 ]"

// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
//RESPOSTA: "[ 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5 ]"



// EXERCÍCIO 2

// Leia o código abaixo:

//     let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
    
//     const funcao = (lista, nome) => {
//       for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === nome) {
//           return i;
//         }
//       }
//     };
    
//     console.log(funcao(arrayDeNomes, "Darvas"));
//     console.log(funcao(arrayDeNomes, "João"));
//     console.log(funcao(arrayDeNomes, "Paula"));

// a. Explicite quais são as saídas impressas no console
//RESPOSTA:
// 0
// 2
// undefined

// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)
//  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
//RESPOSTA: Sim, da mesma forma que ele busca o nome na lista através da igualdade do valor da string, 
// ele faz o mesmo com o número, retornando seu index.



// EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente 
// o que ela faz e sugira um nome melhor para ela!

//     function metodo(array) {
//       let resultadoA = 0;
//       let resultadoB = 1;
//       let arrayFinal = [];
    
//       for (let x of array) {
//         resultadoA += x;
//         resultadoB *= x;
//       }
    
//       arrayFinal.push(resultadoA);
//       arrayFinal.push(resultadoB);
//       return arrayFinal;
//     }
//RESPOSTA: ela pega a array iserida soma o primeiro número com o segundo, e multiplica o segundo pelo 
//primeiro em um looping. "somaEmultiplicacaoDaArray()".



// **Exercícios de escrita de código**

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:

// a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e 
//calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro
function idadeCanina(idadeHumana) {
    const idadeCachorro = idadeHumana * 7;
    return "Sua idade canina é de " + idadeCachorro + " anos.";
}
console.log(idadeCanina(4));

// b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o 
// nome (`string`), a idade (`number`), o endereço (`string`) e um `boolean` que representa se é 
// estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em 
// uma só mensagem com o template:
const name = String("Murilo");
const anos = Number(34);
const rua = String("R. Dos Bobos, nº 0");
const estudante = Boolean(true);

function apresentacao(nome, idade, endereco, estuda) {
    if(estuda === true) {
        var estudante = "sou estudante"
        
    } else if (estuda === false) {
        var estudante = "não sou estudante"
        
    }
    
    return "Eu sou " + nome + ", tenho " + idade + " anos, " + "moro em " + endereco + " e " + estudante;
     
}

console.log(apresentacao(name, anos, rua, estudante));



// EXERCÍCIO 5

// O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, 
// considere as seguintes afirmações:

// 1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode 
// implementar para um intervalo maior)

// 2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM 
// ALGARISMOS ROMANOS]`

// 3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor
function seculo(ano) {
    let anoDecompor = ano;
    let milhar = Math.trunc(anoDecompor / 1000);
    anoDecompor = anoDecompor % 1000;
    let centena = Math.trunc(anoDecompor / 100);
    anoDecompor = anoDecompor % 100;
    let dezena = Math.trunc(anoDecompor / 10)
    let unidade = anoDecompor % 10;

    if(dezena > 0 || unidade) {
        centena = centena + 1;
    }

    switch(milhar) {
        case 1:
            var primeiroRomano = "X";
            break;
        case 2:
            var primeiroRomano = "XX";
            break;
    }

    switch(centena) {
        case 0:
            var segundoRomano = ""
            break;
        case 1:
            var segundoRomano = "I";
            break;
        case 2:
            var segundoRomano = "II";
            break;
        case 3:
            var segundoRomano = "III";
            break;
        case 4:
            var segundoRomano = "IV";
            break;
        case 5:
            var segundoRomano = "V";
            break;
        case 6:
            var segundoRomano = "VI";
            break;
        case 7:
            var segundoRomano = "VII";
            break;
        case 8:
            var segundoRomano = "VIII";
            break;
        case 9:
            var segundoRomano = "IX";
            break;
    }


    console.log("O ano " + ano + " pertence ao século " + primeiroRomano + segundoRomano);
}


// EXERCÍCIO 6

// Para os itens a seguir, considere o seguinte array para os seus testes:

//     const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares 
// dentro dele

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b 
// para verificar se o número é par

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
function contaLista(array) {
    for(var i = 1; i < array.length; i++) {  
    }
    return i;
}

// b.
function numeroPar(num) {
    if(num % 2 === 0){
        return true;
    } else if(num % 2 !== 0) {
        return false;
    }
}

// c.
function contaPares(array) {
    let par = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            par += 1;
        }
    }
    return par;
}

// e.
function contaParesNovamente(array) {
    var contador = 0;
    for(let i = 0; i < array.length; i++) {
        if(numeroPar(array[i]) === true) {
            contador += 1;
        }
    }
    return contador;    
}