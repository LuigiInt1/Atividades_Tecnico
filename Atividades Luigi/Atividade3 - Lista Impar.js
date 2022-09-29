/*Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.*/
 
let numero = []
let soma=0
addNumero 

for(i=5; i > 0; i--){
    // 0  1 2  3 4  5 6  7 8 9
    // 5 10 5 10 5 10 5 10 5 10
    
    addNumero =Number(prompt("Digite 5 numeros"))
    
    if(addNumero %2 == 1 ){
    numero.push(addNumero) 
       
    soma+=addNumero
    }
        
   
}
alert(`lista do impares ${numero}. \nSoma dos Impares ${soma}`)