/*Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.*/  

let num, Acumulo=0, media



for(i=5; i > 0; i--){
    num= Number(prompt("Digite 5 valores"))
    if(num %2 == 0){
        Acumulo= num + Acumulo
    }

    else{
        alert("Um dos números digitados era ímpar")
        break
    }
}

if(i==0){
    alert("Parabens, você conseguiu!!")
    media= Acumulo/5
    alert(`${Acumulo}`)
    alert(`${media}`)
}







