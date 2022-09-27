/*Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. (DESAFIO: Gerar o número secreto aleatoriamente)*/ 

let Resposta=Math.floor(Math.random() * (100-0) + 0)
let num, tentativas=0

alert("Advinhe o número correto de 0 a 100")
num= Number(prompt("Adivinhe"))
while(num!= Resposta){
    
    if(num > Resposta ){
        num=Number(prompt("MENOS") )  
    }else{
        num=Number(prompt("MAIS") ) 
    }
    tentativas++
}
if(num == Resposta && tentativas == 1){
    alert(`!!!!!!!!IMPOSSIVELLLLLLL!!!!!!!\nVOCE ACERTOU DE PRIMEIRA!!!!!!!!!!!`)      
}
    if(num == Resposta && tentativas <=5 && tentativas >1){
        alert(`PARABENS!!!!\n Você teve ${tentativas} tentativas! Você foi muito bem!!!!`)      
    }
    if(num == Resposta && tentativas >5 && tentativas <11){
        alert(`Parabens!\n Você teve ${tentativas} tentativas! `)      
    }
    if(num == Resposta && tentativas >10 && tentativas < 15){
        alert(`PaRaBeNs\n Você teve ${tentativas} tentativas! Você pode ser melhor!!!!`)      
    }
    if(num == Resposta && tentativas >15){
        alert(`Tu é péssimo em meu Cupinxa\n Você teve ${tentativas} PARE DE JOGAR!`)      
    }
