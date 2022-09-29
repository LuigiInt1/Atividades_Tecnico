//Método concat
let frutas = [' goiaba', ' uva' , ' abacaxi']
let verduras = [' pepino' , ' pimenta', ' salsa' ]
let ortifrut = []

ortifrut = frutas.concat(verduras)

alert(ortifrut)

// método indexOf() e LastIndexOf()
let numeros = [8, 2, 8 , 2 , 8 , 7, 12, 8, 18 ]
let numeroPesquisa
let indiciNumeroPrimeira
let indiciNumeroUltima
let vetorPrincipal = []


   

    //indiciNumeroPrimeira= numeros.indexOf( numeroPesquisa)
    //indiciNumeroUltima= numeros.lastIndexOf( numeroPesquisa)

    //alert(`Primeira posição encontrada: ${indiciNumeroPrimeira}\nUltima posição encontrada ${indiciNumeroUltima}`)
    numeroPesquisa = Number(prompt("Digite o valor para saber suas posições"))
    
    for(i=0; i< numeros.length; i++){
        
        if(numeroPesquisa == numeros[i]){

            vetorPrincipal.push(i) 
        }
        
    
    }
    alert(vetorPrincipal)
    