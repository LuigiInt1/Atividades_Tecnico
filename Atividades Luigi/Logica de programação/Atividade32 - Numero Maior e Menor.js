/*Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.*/ 

let num, numMaior=0, numMenor=51, fora=0

for(i=10; i > 0; i--){
    num=Number(prompt("Digite 10 valores entre 0 e 50")) 

    if(num<51 && num >0){
        if(num>numMaior){
        numMaior=num
        }   
        if(num<numMenor){
        numMenor=num
        }
    }
    else{
        fora++
    }

}
alert(`Numero maior ${numMaior}\nNumero menor ${numMenor}\nNumeros ignorados ${fora}`)
