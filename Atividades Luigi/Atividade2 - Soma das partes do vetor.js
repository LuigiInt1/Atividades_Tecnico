/* Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.*/ 

let numero = []
let resultadoUm  = 0
let resultadoDois = 0
let addNumero

    for(i=0; i < 10; i++){
    // 0  1 2  3 4  5 6  7 8 9
    // 5 10 5 10 5 10 5 10 5 10
        addNumero= Number(prompt("Digite 10 numeros"))
        numero.push(addNumero)  

        if( i < 5){
            resultadoUm += addNumero
        }

        if( i >= 5){
            resultadoDois += addNumero
        }

    }

alert(resultadoUm - resultadoDois)

