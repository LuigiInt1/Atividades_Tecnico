/*Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. (JS)*/

alert("Descubrir qual foi a média de Chopp ingerido por pessoa na festa.")
let media, choopDesperdiçado, quantidadeSobrou
 choopDesperdiçado = Number(prompt("Digite a quantidade de chopp desperdiçado."))
 quantidadeSobrou = 300 - choopDesperdiçado
 media = (quantidadeSobrou / 45).toFixed(2)

alert(`A média de Chopp bebido por pessoa é: ${media}L\nA quantidade desperdiçada foi: ${choopDesperdiçado}L\nA quantidade de Chopp que sobrou foi: ${quantidadeSobrou}L`)