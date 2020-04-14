/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 /** 
  alert("Bem vindo ao jogo de Blackjack!");
  if(confirm("Deseja iniciar uma rodada")) {
    const userCartaUm = comprarCarta();
    let userCartaDois = comprarCarta();
 
    while(userCartaUm === userCartaDois){
       userCartaDois = comprarCarta();
    }
 
    let pcCartaUm = comprarCarta();
 
    while(pcCartaUm === userCartaUm || pcCartaUm === userCartaDois) {
       pcCartaUm = comprarCarta();
    }
 
    let pcCartaDois = comprarCarta();
    
    while(pcCartaDois === pcCartaUm || pcCartaDois === userCartaUm || pcCartaDois === userCartaDois) {
       pcCartaDois = comprarCarta();
    }
 
    const userTotal = userCartaUm.valor + userCartaDois.valor;
    const pcTotal = pcCartaUm.valor + pcCartaDois.valor;
 
    console.log("Usuário - cartas: " + userCartaUm.texto + " " + userCartaDois.texto + " - pontuação: " + userTotal);
    console.log("Computador - cartas: " + pcCartaUm.texto + " " + pcCartaDois.texto + " - pntuação: " + pcTotal);
 
    if(userTotal > pcTotal && userTotal <= 21){
       console.log("O usuário ganhou!");
    } else if (pcTotal > userTotal && pcTotal <= 21) {
       console.log("O computador ganhou!");
    } else if (userTotal === pcTotal) {
       console.log("Empate!");
    }
 
  } else {
     console.log("O jogo acabou.");
  }
  */