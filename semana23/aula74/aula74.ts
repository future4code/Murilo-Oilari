/**
 * Exercício 1
 * Escreva uma função recursiva que:
 */

/**
 * a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
 */
const printAscNumbers = (n: number): void => {
  if(n >= 0) {
    printAscNumbers(n-1);
    console.log(n);
  };
};
//printAscNumbers(10);

/**
 * b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
 */
const printDescNumbers = (n: number): void => {
  if(n >= 0) {
    console.log(n);
    printDescNumbers(n-1);
  };
};
//printDescNumbers(10);

/**
 * Exercício 2
 * Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
 */
const calculateSum = (
  n: number, 
  acc: number = 0
  ): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSum(n - 1, acc + n);
};
//console.log(calculateSum(50));

/**
 * Exercício 3
 * Escreva uma função recursiva que consiga imprimir todos os elementos de um array
 */
const printElementsOfArray = (
  array: number[], 
  i: number = array.length - 1
  ) => {
  if(i >= 0) {
    printElementsOfArray(array, i - 1);
    console.log(`Elemento ${i}: `, array[i]);
  }
};
//printElementsOfArray([1, 2, 3, 4, 5]);