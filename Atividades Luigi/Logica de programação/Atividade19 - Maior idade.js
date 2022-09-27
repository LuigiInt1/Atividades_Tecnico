/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.*/

let idade1, idade2, idade3, idade4, idade5, nome1, nome2, nome3, nome4, nome5, media, maiorIdade 

nome1 = prompt("Digite o seu nome!")
idade1 = Number(prompt(`${nome1} digite sua idade.`))
nome2 = prompt("Digite o seu nome!")
idade2 = Number(prompt(`${nome2} digite sua idade.`))
nome3 = prompt("Digite o seu nome!")
idade3 = Number(prompt(`${nome3} digite sua idade.`))
nome4 = prompt("Digite o seu nome!")
idade4 = Number(prompt(`${nome4} digite sua idade.`)) 
nome5 = prompt("Digite o seu nome!") 
idade5 = Number(prompt(`${nome5} digite sua idade.`))

media = ((idade1 + idade2 + idade3 + idade4 + idade5)/5).toFixed(2)

if (idade1 > idade2 && idade1 > idade3 && idade1 > idade4 && idade1 > idade5 ){
alert(` ${nome1} é a pessoa mais velha ${idade1} anos.\n A média da idade das pessoas é: ${media} anos,`)
} 
else if (idade2 > idade1 && idade2 > idade3 && idade2 > idade4 && idade2 > idade5 ){
    alert(` ${nome2} é a pessoa mais velha com ${idade2} anos.\n A média da idade das pessoas é: ${media} anos,`)
}
else if (idade3 > idade1 && idade3 > idade2 && idade3 > idade4 && idade3 > idade5 ){
    alert(` ${nome3} é a pessoa mais velha com ${idade3} anos.\n A média da idade das pessoas é: ${media} anos,`)
}
else if (idade4 > idade1 && idade4 > idade3 && idade4 > idade2 && idade4 > idade5 ){
    alert(` ${nome4} é a pessoa mais velha com ${idade4} anos.\n A média da idade das pessoas é: ${media} anos,`)
}
else if (idade5 > idade1 && idade5 > idade3 && idade5 > idade4 && idade5 > idade2 ){
    alert(` ${nome5} é a pessoa mais velha com ${idade5} anos.\n A média da idade das pessoas é: ${media} anos,`)
}