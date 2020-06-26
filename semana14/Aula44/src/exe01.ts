//a.
const minhaString: string = '2';

//b.
const meuNumero: number | string = "algo";


//e.
enum coresDoArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

//c.
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresDoArcoIris
}
//d.
const pessoaUm: pessoa = {
    nome: "Maria",
    idade: 30,
    corFavorita: coresDoArcoIris.ANIL
}

const pessoaDois: pessoa = {
    nome: "Mario",
    idade: 3,
    corFavorita: coresDoArcoIris.VERDE
}

const pessoaTres: pessoa = {
    nome: "Mariah",
    idade: 33,
    corFavorita: coresDoArcoIris.AMARELO
}
