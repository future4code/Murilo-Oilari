function arrayToObject(arrayDeNumeros) {
    var impares = arrayDeNumeros.filter(function (el) {
        return el % 2 !== 0 ? true : false;
    });
    var soma = arrayDeNumeros.reduce(function (soma, el) { return soma + el; });
    var novoObjeto = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        quantidadeDeImpares: impares.length,
        somaDeTodosOsElementos: soma
    };
    console.log(novoObjeto);
}
arrayToObject([2, 3, 6, 8]);
