/*Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).*/

let num, expoente, resultado, controle=0, Acumulo=0

num= Number(prompt("Digite o numero"))
expoente= Number(prompt("Digite o seu expoente"))

while(controle != expoente){

resultado= num*num
Acumulo= resultado+ Acumulo
    
    controle++
}

alert(`${Acumulo}`)