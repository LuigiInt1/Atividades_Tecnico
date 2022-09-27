/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.*/


// Cria variáveis para armazenar o ano de nascimento do usuário e o ano atual.
let nascimento, anoAtual, idade , meses, dias, semanas
 
// Recebe os dados armazenados nas variáveis.
nascimento= Number(prompt ("Digite o ano de seu nascimento: (YYYY)"))
anoAtual= Number(prompt ("Dite o ano atual: (YYYY)"))


// As variáveis recebem os valores dos cálculos.
idade= anoAtual -  nascimento
meses= idade * 12 
dias= idade * 365
semanas= idade * 52

// Mostra as informações na tela.
alert(` Esta é a sua idade: ${idade}\n Sua idade em meses: ${meses}\n Sua idade em semanas: ${semanas}\n Sua idade em dias: ${dias}`)