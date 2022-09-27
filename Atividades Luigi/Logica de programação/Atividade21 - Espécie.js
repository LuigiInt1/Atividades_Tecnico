/*Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"*/

let especie, individuos

especie = prompt("Digite o nome da espécie!")
individuos = Number(prompt(`Digite a população da espécie ${especie}!`))

if (individuos < 500 ) {
    alert(`A espécie ${especie} que possui ${individuos} está criticamente em perigo!`)
}
else if (individuos > 500 && individuos < 1000){
    alert(`A espécie ${especie} que possui ${individuos} está em perigo!`)
}
else {
    alert(`A espécie ${especie} que possui ${individuos} é uma espécie vulneravel!`)
}




