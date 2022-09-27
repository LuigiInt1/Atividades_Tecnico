/*Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se está abaixo ou acima do piso salarial mensal.*/

let salarioAnual, piso, salarioMensal 

salarioAnual = Number(prompt("Digite o seu salario anual."))
piso = Number(prompt("Digite o piso."))

salarioMensal = (salarioAnual /12).toFixed(2)

if(salarioMensal >= piso){
alert(`O salário de R$${salarioMensal} está acima do piso!`)


}else if(salarioMensal == piso){
    alert(`O salário de R$${salarioMensal} está correto`)
}
else {
alert(`O salário de R$${salarioMensal} está abaixo do piso`)

}




















