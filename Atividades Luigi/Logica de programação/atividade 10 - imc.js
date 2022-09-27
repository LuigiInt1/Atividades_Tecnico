/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. */

let peso = document.getElementById("10")
let altura = document.getElementById("20")


function Massa()
{
    alert(`Esta é a sua Massa: ${(peso.value / (altura.value * altura.value)).toFixed(2)}`)
}