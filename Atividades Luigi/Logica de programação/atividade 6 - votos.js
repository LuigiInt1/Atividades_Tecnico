/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o numero total de eleitores. Em seguida o numero de votos do candidato X, o numero de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao numero total de eleitores). calcular e escrever o percentual que cada um representa eme relação ao total de eleitores.*/

// Cria variáveis para receber os dados.
let totaleleitores, candidatoX, canditadoY, branco, nulo, porcentualX, porcentualY, porcentualN, porcentualB

// As varáveis recebem os valores que o usuários digitaram.
candidatoX= Number(prompt ("Digite quantos votos o Candidato X teve."))
canditadoY= Number(prompt ("Digite quantos votos o Candidato Y teve"))
branco= Number(prompt ("Digite quantos votos em branco teve."))
nulo= Number(prompt ("Digite quantos votos o Candidato Y teve."))

// A variavel recebe o resultado do cálculo.
totaleleitores = candidatoX +  canditadoY +  branco +  nulo 

// As variáveis recebem os valores descobertos nos cálculos.
porcentualX = (candidatoX * 100 / totaleleitores).toFixed(2)
porcentualY = (canditadoY * 100 / totaleleitores).toFixed(2)
porcentualN = (branco * 100 / totaleleitores).toFixed(2)
porcentualB = (nulo * 100 / totaleleitores).toFixed(2)

// Mostra as informações na tela.
alert(`Na cidade de Florianópolis, ${totaleleitores} pessoas votaram nessas eleições.\nO número de votos que o Candidato X foi: ${candidatoX}\nO número de votos que o Candidato teve foi: ${canditadoY}\nO número de votos nulos foi: ${nulo}\nO número de votos em branco foi: ${branco}\n\nSuas respectivas porcentagens foram:\nCandidato X: ${porcentualX}%\nCandidato Y: ${porcentualY}%\nNulo: ${porcentualN}%\nBranco: ${porcentualB}%`)