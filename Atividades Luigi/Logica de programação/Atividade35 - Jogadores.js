/*Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho OU gerar as cartas aleatoriamente nesse intervalo numérico).*/ 

let playerUm, playerDois, cartasUm, cartasDois, AcumuloUm= 0, AcumuloDois=0
playerUm=prompt("Player 1, digite seu nome")
playerDois=prompt("Player 2, Digite seu nome")
for(i=5; i > 0; i--){

    alert(`${playerUm}, para pegar uma carta, aperte ENTER.`)
        cartasUm = Math.floor(Math.random() * 12 + 1)
        AcumuloUm += cartasUm
    alert(`A carta que você pegou é ${cartasUm}`)
    
    alert(`${playerDois}, para pegar uma carta, aperte ENTER.`)
        cartasDois = Math.floor(Math.random() * 12 + 1)
        AcumuloDois += cartasDois
    alert(`A carta que você pegou é ${cartasDois}`)
}
if(AcumuloUm>AcumuloDois){

    alert(`O vencedor é ${playerUm}\n Total de cartas: ${AcumuloUm} `)
    
}else{

    alert(`O vencedor é ${playerDois}\n Total de cartas: ${AcumuloDois} `)
  
}