listaDeDespesas = [];

function casdastraDespesa(evento) {
    const despesa = {
        valor: Number(document.getElementById("valor-despesa").value),
        tipo: document.getElementById("tipo-gasto").value,
        descricacao: document.getElementById("descricao-despesa").value
    }
    if( despesa.valor <= 0 ||
        despesa.tipo === "padrao" ||
        despesa.descricacao === "") {
        alert("Os campos de cadastro de despesa devem ser preenchidos corretamente")
    } else {
        adicionaDespesaNaLista(despesa);
        limpaCapmposDespesas();
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


//////////////////////////////
function abc123 () {
    const listaResultado = listaDeDespesas.filter((pokemon, index, array) => {
        if(pokemon.tipo === "casa") {
            return true;
        }
        return false;
    });

}