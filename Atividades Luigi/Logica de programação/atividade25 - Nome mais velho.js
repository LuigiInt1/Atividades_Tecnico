/*Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)*/ 
let media, idade, Acumulo=0, idadeMaior=0, maiorNome

for(i=1; i < 6; i++){
    nome= prompt("Digite o nome")
    idade=Number(prompt("Digite a idade"))
    if(idade>idadeMaior ){

        Acumulo=Acumulo + idade
        idadeMaior=idade
        maiorNome= nome
    }
}

media=(Acumulo/5).toFixed(2)
alert(`A média é ${media}\nA idade maior foi ${idadeMaior}\nA pessoa mais velha se chama ${maiorNome}`)