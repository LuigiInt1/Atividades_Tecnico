/*Faça um programa no qual o usuário digite dois 
números e mostre na tela a multiplicação desses números.*/

// Cria varieaveis para receber os números.
let NumeroUm, NumeroDois, Soma

// Avisa o usuário para digitar os valores.
 alert("Por favor, digite dois valores!")  

 // Recebe os dados e armazena nas variaveis.
 NumeroUm = Number(prompt (NumeroUm))
 NumeroDois = Number(prompt (NumeroDois))

// Realiza a multiplicação das variaveis e armazena na variavel "soma"
 Soma = (NumeroUm * NumeroDois).toFixed(2)
 
 // Mostra a soma ao usuário.
 alert(`Esta é a multiplicação dos dois numeros: ${Soma}`)