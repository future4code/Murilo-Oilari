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

alert("Bem vindo ao jogo de Blackjack!");
if(confirm("Deseja iniciar uma rodada")) {
   let userCartaUm = comprarCarta();
   let userCartaDois = comprarCarta();

   while(userCartaDois === userCartaUm){
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
   
   if(userCartaUm.valor === 11 && userCartaDois.valor === 11){
      while(userCartaUm === 11 && userCartaDois.valor === 11){
         userCartaUm = comprarCarta();
         userCartaDois = comprarCarta();
      } 
   } else if(pcCartaUm.valor === 11 && pcCartaDois.valor === 11 || 
            pcCartaDois === pcCartaUm || pcCartaDois === userCartaUm || 
            pcCartaDois === userCartaDois || pcCartaUm === userCartaUm || 
            pcCartaUm === userCartaDois) {
      while(pcCartaUm === 11 && pcCartaDois.valor === 11) {
         pcCartaUm = comprarCarta();
         pcCartaDois = comprarCarta();
      }
   }

   let userCartas = [userCartaUm.texto, userCartaDois.texto];
   let userSoma = userCartaUm.valor + userCartaDois.valor;
   
   while(userSoma <= 21) {
      if(confirm("Suas cartas são: " + userCartas + ". A carta revelada do computador é " + pcCartaUm.texto + "." + "\n" + "Deseja comprar mais uma carta?")){
         let novaCarta = comprarCarta();
         userCartas.push(novaCarta.texto);
         userSoma = userSoma + novaCarta.valor;
      } else {
         break;         
      }         
   }

   let pcCartas = [pcCartaUm.texto, pcCartaDois.texto];
   let pcSoma = pcCartaUm.valor + pcCartaDois.valor;

   while(pcSoma <= userSoma) {
      let pcNovaCarta = comprarCarta();
      pcCartas.push(pcNovaCarta.texto);
      pcSoma = pcSoma + pcNovaCarta.valor;
   }

   console.log("Usuário - cartas: " + userCartas + " - pontuação: " + userSoma);
   console.log("Computador - cartas: " + pcCartas + " - pontuação: " + pcSoma);

   if(userSoma > 21) {
      var userPerdeu = true;
   } 
   if (pcSoma > 21) {
      var pcPerdeu = true;
   }

   if(userPerdeu === true && pcPerdeu === true){
      alert("Não houve vencedor");
   }else if(userPerdeu === true) {
      alert("Computador venceu");
   }else if(pcPerdeu) {
      alert("Usuário venceu");
   }else if(pcSoma === userSoma) {
      alert("Empate")
   }
}