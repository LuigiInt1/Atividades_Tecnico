let sequencia
 let i                                         
for ( i=10; i > 0; i--){

    sequencia= Number(prompt("Digite a sequencia de 10 a 0"))
    
    if(sequencia != i){
       
        alert("errou")
        break
    }   
}

if(i==0){
    alert("Parabens, você conseguiu!!")
}
