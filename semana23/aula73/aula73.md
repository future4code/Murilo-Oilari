# Aula 73
##### Complexidade de Algoritmos

 &nbsp;
 &nbsp;
 
**Determine a complexidade dos seguintes algoritmos:**
&nbsp;
**1)** 
~~~
const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
~~~
>R.: O(n)

 &nbsp;

**2)**
~~~
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
~~~
>R.: O(n)

&nbsp;

**3)**
~~~
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
~~~
>R.: O(1)

&nbsp;

**4)** 
~~~
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
~~~
>R.: O(n²)

&nbsp;

**5)**
>R.: Grau de eficiência, do mais eficiente para o menos eficiênte:
- replaceMatrixValue(exercício3)
- func(exercício2) & findFirstRecurringCharacter(exercício1)
- verifyIfExistRepeatedNumbers(exercício4)

&nbsp;
&nbsp;

---