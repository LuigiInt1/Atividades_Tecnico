/*Elaborar um programa no qual sejam digitadas 4 notas. Deve ser calculada uma média e mostrada na tela. Se a média for maior ou igual a 7, mostrar uma mensagem "Aprovado", se for menor que 7, mostrar uma mensagem "Reprovado". (DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado).*/

let nota1, nota2, nota3, nota4, media

nota1= Number(prompt("Valor da Primeira Avaliação."))
nota2= Number(prompt("Valor da Segunda Avaliação."))
nota3= Number(prompt("Valor da Terceira Avaliação."))
nota4= Number(prompt("Valor da Quarta Avaliação."))

media= ((nota1 + nota2 + nota3 + nota4)/4).toFixed(2)
 if(media >= 7){
    alert(`Esta foi a sua média: ${media}| APROVADO`)
 }

 else if(media >= 5 && media < 7 ){

    alert(`Esta foi sua média: ${media} | RECUPERAÇÃO`)
 }else{

    alert(`Esta foi sua média: ${media} | REPROVADO`)
 }























