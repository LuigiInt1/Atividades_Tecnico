/*Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).*/

let peso
let altura
let IMC

peso = Number(prompt("Digite seu peso."))
altura = Number(prompt("Digite sua altura."))

 IMC = (peso / (altura * altura)).toFixed(2)

if(IMC < 18){

alert(`O seu IMC é: ${IMC}.\nEstá a baixo do peso!`)



}else if (IMC > 17 && IMC < 26){

alert(`O seu IMC é: ${IMC}.\nEstá na faixa ideal!`)

}else{

alert(`O seu IMC é: ${IMC}.\nEstá acima do peso!`)

}





