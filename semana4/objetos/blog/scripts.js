listaDePostagens = [];

function enviaPostagem(ev) {
    const postagem = {
        autor: document.getElementById("autor").value,
        titulo: document.getElementById("titulo").value,
        conteudo: document.getElementById("conteudo").value
    }
    adicionaPostNalista(postagem)
    document.getElementById("autor").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";

}

function adicionaPostNalista(post) {
    listaDePostagens.push(post);
    exibePostagens()
}

function exibePostagens() {
    document.getElementById("postagens").innerHTML = "";
    for(let i = 0; i < listaDePostagens.length; i++) {
        document.getElementById("postagens").innerHTML +=   "<article>" + 
                                                                "<h3>" + listaDePostagens[i].titulo + "</h3>" + 
                                                                "<p>" + listaDePostagens[i].conteudo + "</p>" + 
                                                                "<h6>" + listaDePostagens[i].autor + "</h6>" + 
                                                            "</article>"    
    }
}
