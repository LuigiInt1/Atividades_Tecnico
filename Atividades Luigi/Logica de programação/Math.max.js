/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.*/

let idade1, idade2, idade3, idade4, idade5, nome1, nome2, nome3, nome4, nome5, media, maiorIdade 

nome1 = prompt("Digite o seu nome!")
nome2 = prompt("Digite o seu nome!")
nome3 = prompt("Digite o seu nome!")
nome4 = prompt("Digite o seu nome!")
nome5 = prompt("Digite o seu nome!") 

idade1 = Number(prompt(`${nome1} digite sua idade.`))
idade2 = Number(prompt(`${nome2} digite sua idade.`))
idade3 = Number(prompt(`${nome3} digite sua idade.`))
idade4 = Number(prompt(`${nome4} digite sua idade.`)) 
idade5 = Number(prompt(`${nome5} digite sua idade.`))

media = ((idade1 + idade2 + idade3 + idade4 + idade5)/5).toFixed(2)


maiorIdade = Math.max(idade1, idade2, idade3, idade4, idade5)

alert(`Está é a idade das respectivas pessoas:\nNome: ${nome1}| Idade: ${idade1}\nNome: ${nome2}| Idade: ${idade2}\nNome: ${nome3}| Idade: ${idade3}\nNome: ${nome4}| Idade: ${idade4}\nNome: ${nome5}| Idade: ${idade5}\n\nEsta é a média de idade das pessoas: ${media}\nA pessoa mais velha possui ${maiorIdade} anos.  `)





