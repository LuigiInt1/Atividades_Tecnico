/*Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).*/

let densidade, habitantes, area

habitantes = Number(prompt("Digite a população!"))
area =  Number(prompt("Digite a área²!"))

densidade = (habitantes / area).toFixed(2)

if ( densidade < 25){
    alert(`A densidade demografica da sua área é baixa.`)

}
else if (densidade >= 100 ){
alert(`A densidade demografica de sua área é alta.`)

}
else{
    alert(`A densidade demografica de sua área é média.`)
}




