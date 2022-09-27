/*
Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço.
 Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], 
 reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, 
 reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.
 */
// Cria variáveis para armazenar os dados do usuário.
 let nome, idade, endereço, nacionalidade

 // Recebe os dados do usuário e armazena nas variáveis.
 nome = prompt ("DIgite seu nome:")
 idade = Number(prompt ("DIgite sua idade:"))
 endereço = prompt ("DIgite seu endereço:")
 nacionalidade = prompt ("DIgite sua nacionalidade:")

// Mostra as informações do usuário.
 alert(`Cliente ${nome}, com idade ${idade} anos, ${nacionalidade}, reside no endereço ${endereço}.`);