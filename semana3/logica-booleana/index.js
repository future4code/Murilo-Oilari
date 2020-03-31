// 1. Leia o código abaixo. Indique todas as mensagens impressas no console.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// a. false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
// b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
// d. false

console.log("e. ", typeof resultado)
// e. boolean

/* 2. Leia o código abaixo.
    
    let array
    console.log('I. ', array)
    
    array = null
    console.log('II. ', array)
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    
    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    
    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    
    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)

a. Array é uma lista e deve ser declarada:
var/let/const nomeDaLista = [item01, item02, item03, . . . itemX];

b. É o index[0]

c. Usando a propriedade .length
ex.:
let lista = [1, 2, 3];
lista.length 
//retorna o valor 3.

d. 
I.  undefined
II. null
III.11
IV. 3 e 4
V.  19 e 9
VI. 3
VII.1

*/


// Exercício de escrita de código.

// 1.
/*
fahrenheitToKelvin = (grausFahrenheit - 32)*5/9 + 273.15;
celciusToFahrenheit = (grausCelcius*9/5) + 32;
*/

// a. Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também.
let grausFahrenheitA = 77;
const fahrenheitToKelvinA = (grausFahrenheitA - 32)*5/9 + 273.15;
console.log("a. " + fahrenheitToKelvinA +  " K");

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let grausCelciusB = 80;
const celciusToFahrenheitB = (grausCelciusB) * 9/5 + 32;
console.log("b. " + celciusToFahrenheitB + " ºF");

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
let grausCelciusC = 30;
const celciusToFahrenheitC = (grausCelciusC * 9/5) + 32;
let grausFahrenheitC = celciusToFahrenheitC;
const fahrenheitToKelvinC = (grausFahrenheitC - 32)*5/9 + 273.15;
console.log("c. " + celciusToFahrenheitC + " ºF e " + fahrenheitToKelvinC + " K");

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let grausCelciusD = prompt("Digite a temperatura em ºC para convertê-la");
const celciusToFahrenheitD = (grausCelciusD * 9/5) + 32;
let grausFahrenheitD = celciusToFahrenheitD;
const fahrenheitToKelvinD = (grausFahrenheitD - 32)*5/9 + 273.15;
console.log("d. " + celciusToFahrenheitD + " ºF e " + fahrenheitToKelvinD + " K");


// 2.
const oQueVoceE = prompt("01. Vocé é humano, ou um robô?");
console.log("01. Humm! então você é um " + oQueVoceE + ", não parece!");

const deOnde = prompt("02. De onde você é?");
console.log("02. Nossa! " + deOnde + ", podia jurar que já tinha te visto em Alfa Centauri");

const comida = prompt("03. Qual sua comida preferida?");
console.log("03. Eca! de onde eu venho " + comida + " é usado como pesticida!");

const desconfiado = prompt("04. Desconfiado desse tanto de perguntas?");
console.log("04. [" + desconfiado + "] " + "Pois bem, deveria!");

const final = prompt("05. Para terminar, qual a raiz cúbica de 99.854.361?");
console.log("05. " + final + "? Tem certeza? Melhor você ir buscar conhecimento.")


// 3.

let valorQuiloWattHora = 0.05;

let consumoQuiloWatt = prompt("Digite a quantidade de Quilowatt-hora");
let total = consumoQuiloWatt * valorQuiloWattHora;
console.log("Consumo: " + consumoQuiloWatt + " QW/h | Valor a pagar: R$" + total);