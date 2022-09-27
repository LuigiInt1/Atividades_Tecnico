/* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.*/ 


let  multas, pontos, acumuloPontos=0, valor, acumuloValor=0, QualMulta=1

multas= Number(prompt("Digite o número de multas que deseja cadastrar"))

for(i=multas; i > 0; i--){

valor=Number(prompt(`Valor da multa ${QualMulta}`))
pontos=Number(prompt("Pontos na carteira"))
acumuloValor= acumuloValor + valor
acumuloPontos= acumuloPontos + pontos
QualMulta++
}
if(acumuloPontos>=21){
alert(`O valor total das multas ficou em R$${acumuloValor}\nVocê recebeu ${acumuloPontos} pontos!\n\n      Você está irregular`)

}
else{
    alert(`O valor total das multas ficou em R$${acumuloValor}\nVocê recebeu ${acumuloPontos} pontos!\n\n      Você está regular`)
    
    }








