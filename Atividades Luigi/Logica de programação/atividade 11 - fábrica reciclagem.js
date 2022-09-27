/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. */

let plastico , papel , metal, valor

plastico = Number(prompt("Quantidade de plástico em (kg)"))
papel = Number(prompt("Quantidade de papel em (kg)"))
metal = Number(prompt("Quantidade de metal em (kg)"))

plastico = ((plastico * 2)/10)
papel = ((papel * 3)/30)
metal = ((metal * 5)/50)
valor =(plastico + papel + metal).toFixed(2)

alert(`Esse foi o seu valor total: R$${valor}`)