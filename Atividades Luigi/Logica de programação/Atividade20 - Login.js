/*Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).*/

let usuario, senha 

usuario = prompt("Digite o seu username").toLowerCase()
senha = Number(prompt("Digite sua senha"))

if( usuario == 'admin' && senha == 123 ){

alert("Login efetuado!")
}

else if ( usuario != 'admin' && senha == 123)   {
alert("Seu username está incorreto!")
}   
else if ( usuario == 'admin' && senha != 123) {  
    alert("Sua senha está incorreta!")          

}
else { alert("Seu username e senha estão incorretos!") } 

