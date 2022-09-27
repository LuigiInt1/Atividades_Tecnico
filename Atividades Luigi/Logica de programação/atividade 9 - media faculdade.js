/*Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela.*/

let nota1 = document.getElementById("n1")
let nota2 = document.getElementById("n2")
let nota3 = document.getElementById("n3")
let media  

function cMedia() {
    
 media = ((nota1.value*1) + (nota2.value*1) + (nota3.value * 3))/5

alert(`Esta é a média: ${media.toFixed(2)}`)
}
