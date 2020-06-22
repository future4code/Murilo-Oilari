function arrayToObject (arrayDeNumeros: number[]): void {
    type objetoDaLista = {
        quantidadeDeNumeros: number,
        quantidadeDeImpares: number,
        somaDeTodosOsElementos: number
    }

    const impares = arrayDeNumeros.filter(el => 
        el % 2 !== 0 ? true : false);
        
    const soma: number = arrayDeNumeros.reduce((soma, el) => soma + el)

    const novoObjeto: objetoDaLista = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        quantidadeDeImpares: impares.length,
        somaDeTodosOsElementos: soma
    }

    console.log(novoObjeto)
}


arrayToObject([2, 3, 6, 8])