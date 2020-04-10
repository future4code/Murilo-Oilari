var listaDeDespesas = [];
var pesquisa = [];

function casdastraDespesa(evento) {
    const despesa = {
        valor: Number(document.getElementById("valor-despesa").value),
        tipo: document.getElementById("tipo-gasto").value,
        descricao: document.getElementById("descricao-despesa").value
    }
    if( despesa.valor <= 0 ||
        despesa.tipo === "padrao" ||
        despesa.descricao === "") {
        alert("Os campos de cadastro de despesa devem ser preenchidos corretamente")
    } else {
        adicionaDespesaNaLista(despesa);
        limpaCapmposDespesas();
        saldo();
    }
}

function adicionaDespesaNaLista(despesas) {
    listaDeDespesas.push(despesas);
}

function limpaCapmposDespesas() {
    document.getElementById("valor-despesa").value = "";
    document.getElementById("tipo-gasto").value = "padrao";
    document.getElementById("descricao-despesa").value = "";
}

function mostrarPesquisa(lista) {
    //document.getElementById("resultado").innerHTML = "<h4> - " + lista[0].tipo + " - </h4>"
    for(let i = 0; i < lista.length; i++) {
        document.getElementById("resultado").innerHTML +=   "<article>" + 
                                                                "<p> R$ " + lista[i].valor + " - " + lista[i].descricao + "</p>" +
                                                            "</article>"
    } 
}

function pesquisaDespesa(evento) {
        tipoPesquisa = document.getElementById("tipo-gasto-detlhe").value
        valorMin = Number(document.getElementById("valor-minimo").value)
        valorMax = Number(document.getElementById("valor-maximo").value)

    const pesquisa = listaDeDespesas.filter((elemento, index, array) => {
        if(elemento.tipo === tipoPesquisa && elemento.valor <= valorMax && elemento.valor >= valorMin) {
            return true
        }
    })
    limpaCamposPesquisa()
    mostrarPesquisa(pesquisa) 
}

function limpaCamposPesquisa() {
        document.getElementById("tipo-gasto-detlhe").value = "padrao";
        document.getElementById("valor-minimo").value = "";
        document.getElementById("valor-maximo").value = "";
}

function limpaPesquisa () {
    document.getElementById("resultado").innerHTML = "";
}

function saldo() {
    let total = 0;
    for(let i = 0; i < listaDeDespesas.length; i++) {
        total += Number(listaDeDespesas[i].valor)
    }
    document.getElementById("valor-total").innerHTML = "<h5> R$ " + total + "</h5>";
}