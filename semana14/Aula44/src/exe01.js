//a.
var minhaString = '2';
//b.
var meuNumero = "algo";
//e.
var coresDoArcoIris;
(function (coresDoArcoIris) {
    coresDoArcoIris["VERMELHO"] = "vermelho";
    coresDoArcoIris["LARANJA"] = "laranja";
    coresDoArcoIris["AMARELO"] = "amarelo";
    coresDoArcoIris["VERDE"] = "verde";
    coresDoArcoIris["AZUL"] = "azul";
    coresDoArcoIris["ANIL"] = "anil";
    coresDoArcoIris["VIOLETA"] = "violeta";
})(coresDoArcoIris || (coresDoArcoIris = {}));
//d.
var pessoaUm = {
    nome: "Maria",
    idade: 30,
    corFavorita: coresDoArcoIris.ANIL
};
var pessoaDois = {
    nome: "Mario",
    idade: 3,
    corFavorita: coresDoArcoIris.VERDE
};
var pessoaTres = {
    nome: "Mariah",
    idade: 33,
    corFavorita: coresDoArcoIris.AMARELO
};
