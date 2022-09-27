/* O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.*/ 

const base = 5360, cume = 8848
let escalada = cume - base
let escaladaDia, dias=0, escaladaAcumulada=0
alert(escalada)

    while(escaladaAcumulada < escalada && dias < 8){

        escaladaDia= Number(prompt("Altitude escalada no dia"))
        escaladaAcumulada+= escaladaDia
        

        dias++
        alert(`Faltam ${escalada -escaladaAcumulada}m,\n ${dias} dias passados.`)
    }
if(dias==8 && escaladaAcumulada < escalada){
    alert("Volte")
}else{

alert(`Voce alcançou o cume em ${dias} dias. `)   
    
}










