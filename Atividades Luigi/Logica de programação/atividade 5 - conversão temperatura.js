/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.

(0 °C × 9/5) + 32 = 32 °F
*/

// Cria variáveis para armazenar as temperaturas.  
let Celsius, Fahrenheit

// Variável recebe temperatura informada pelo usuário.
Celsius = Number(prompt ("digite a temperatura atual em graus Celsius."))

// Variável recebe resultado do calculo 
Fahrenheit =  ((Celsius * 1.8) + 32).toFixed(2)

// Mostra mensagem informando a temperatura em Fahrenheit.
alert(`Esta temperatura ${Celsius}°C em Fahrenheit é: ${Fahrenheit}°F `)