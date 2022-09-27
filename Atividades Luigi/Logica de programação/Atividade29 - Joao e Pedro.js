/*Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.*/


let joao= 1.75
let pedro = 1.60
let ano = 0

alert("Você está prestes a descobrir quantos anos vai levar para Pedro ser maior que joão")

while(joao>pedro){
    ano= ano + 1
    pedro = pedro + 0.03
    joao = joao + 0.01
}

alert(`Daqui ${ano} anos `)