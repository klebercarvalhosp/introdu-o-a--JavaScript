// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets().trim();
    jogador2 = gets().trim();
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")console.log("Aniquilacao mutua");
   else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL" )console.log("Ambos venceram");
   else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu ");
   else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA" ) console.log("Jogador 2 venceu ");
   else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL" ) console.log("Jogador 1 venceu ");
   else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu ");
   else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL") console.log("Jogador 1 venceu ");
   else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") console.log("Jogador 1 venceu ");
   else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL" ) console.log("Jogador 1 venceu ");
    else console.log("Sem ganhador");
    jogador1 = "";
    jogador2 = "";
  
}