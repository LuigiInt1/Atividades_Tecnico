/*Depoimento do cliente: “No meu condomínio existe um ladrãozinho sem-vergonha que anda
invadindo os carros do estacionamento. Eu reparei que esse ladrãozinho de m&#!% não entra nos
carros que têm alarme. Não tenho dinheiro para instalar um alarme no meu carro no momento,
então gostaria que você desenvolvesse pra mim um circuito simples para fazer uma daquelas
luzinhas ficar piscando dentro do carro para enganar esse vagabundo filho de uma p#!%*”. */

int tempo1 = 500;
int tempo2 = 1000;
void setup()
{
  pinMode(13, OUTPUT);
}

void loop()
{
  digitalWrite(13, HIGH);
  delay(tempo1);
  digitalWrite(13, LOW);
  delay(tempo2); 
}