/* Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” (DESAFIO: Mostrar na tela também a quantidade de frutas que foram adicionadas)*/

let frutas, acumulo= 1
frutas= prompt("Qual fruta adicionar?\n Caso queira terminar a salada escolha cereja")
while(frutas != 'cereja'){


    frutas= prompt("Qual fruta adicionar?\n Caso queira terminar a salada escolha cereja")

    acumulo++
}
alert(`Você escolheu ${acumulo} frutas\nSua salada de fruta está pronta!!`)













