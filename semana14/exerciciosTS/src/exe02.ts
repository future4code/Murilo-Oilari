//a.
function doisNumeros(a: number, b: number): void {
    console.log('soma', a + b);
    console.log('subtração', a - b);
    a > b ? console.log(a, ' é maior') : console.log(b, 'é maior')
};

doisNumeros(2, 5)