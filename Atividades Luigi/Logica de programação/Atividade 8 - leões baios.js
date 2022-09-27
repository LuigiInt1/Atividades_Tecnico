/*1) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. (JS)*/

let casais, unidade, kmT

 casais =Number(prompt("digite o número de casais"))
 
 unidade = 14 - (casais * 2)

 unidade = unidade * 320
 casais = casais * 400
 kmT = unidade + casais
 alert (`A área dominada total é: ${kmT}km²`)