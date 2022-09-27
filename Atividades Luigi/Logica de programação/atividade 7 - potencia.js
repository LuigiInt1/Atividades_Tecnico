/*2) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.*/


// Cria variáveis para receber dados.
let base, expoente, total

// Variáveis recebem os valores digitados pelo usúario.
base = Number(prompt("digite o numero base"))
expoente = Number(prompt("digite expoente"))

// Variável recebe valor do cálculo.
total = base ** expoente

// Mostra o resultado na tela.
alert(`O resultado é: ${total}`)