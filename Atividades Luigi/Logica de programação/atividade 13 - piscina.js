/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/

let azulejo, comprimento, largura, valor, valor1 = 45.50

largura = Number(prompt("Digite a largura da piscina."))
comprimento = Number(prompt("Digite o comprimento da piscina."))

azulejo = largura * comprimento
azulejo = azulejo * 120
valor = ((azulejo * 60 )/ valor1).toFixed(2)

alert(`Esta é a quantidade de azulejos: ${azulejo}\nEste é o orçamento: R$${valor} `)