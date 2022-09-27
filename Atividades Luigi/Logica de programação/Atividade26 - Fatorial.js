/*Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).*/ 

let fat
let resultado = 1

fat= Number(prompt("Digite um valor e descubra seu fatorial"))

for(i=fat; i > 0; i--){

resultado=resultado*i

}

alert(`Seu resultado ${resultado} `)








