/*Você é um amante da natureza e adora fazer trilhas. 
Criar um programa que calcule a velocidade média das 
trilhas que você realiza.
Para isso, devem ser digitados os dados de distância
percorrida (quilômetros) e tempo que a trilha durou 
(horas). Fazer então o cálculo da velocidade média
e mostrar na tela a mensagem
"Sua média de velocidade durante essa trilha foi
de X km/h", sendo X a velocidade.*/


// Cria variáveis para armazenar os dados da trilha.
let distancia, tempo, velocidadeMedia 

// recebe os dados da trilha e armazena nas variáveis.
distancia = Number(prompt ("Digite a distância"))
tempo = Number(prompt ("Digite o tempo de corrida:"))

// Realiza o cálculo e armazena na variável.
velocidadeMedia = (distancia / tempo).toFixed(2)

// Mostra mensagem com resultado na tela.
alert (`Sua média de velocidade durante essa trilha foi de ${velocidadeMedia}km/h`)