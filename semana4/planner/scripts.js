function enviar() {
    const tarefa = document.getElementById("inputando").value;
    const diaSemana = document.getElementById("selecao").value;

    switch (diaSemana) {
        case "segunda":
            document.getElementById("segunda").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "terca":
            document.getElementById("terca").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "quarta":
            document.getElementById("quarta").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "quinta":
            document.getElementById("quinta").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "sexta":
            document.getElementById("sexta").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "sabado":
            document.getElementById("sabado").innerHTML += "<p>" + tarefa + "</p>";
            break;
        case "domingo":
            document.getElementById("domingo").innerHTML += "<p>" + tarefa + "</p>";
            break;
    }
    document.getElementById("inputando").value = "";
}