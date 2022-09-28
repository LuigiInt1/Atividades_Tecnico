//             0  1  2  3   4   
let numeros = [2, 5, 7, 10, 8,]
let idades = []
//              0           1            2
let nomes = ['Ligia', 'Ermenegildo', 'Abgail']
let cores = []
let addCores
let somaVetor = 0 
let addIdades, somaidades = 0

    //Soma os votores
    alert(numeros[0] + numeros[8])

    //Numero de vetores
    alert(numeros.length)

    //Formula para pegar o valor do meio
    alert(numeros[(numeros.length /2 -0.5)])

    //formula para pegar o ultimo valor
    alert(numeros[(numeros.length-1)])

     //Formula para pegar o primeiro
    alert(numeros[0])

    //Mostra todos os valores
    alert(numeros)


for(i=0; i < 5; i++){

    addIdades = prompt("Digite um numero")
    idades.push(addIdades)
    
}
    for(i=0; i < idades.length; i++){



        somaidades+=idades[i]
alert(somaidades)

    }
   

