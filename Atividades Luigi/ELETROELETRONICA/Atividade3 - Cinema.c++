/*gostaria de instalar nele um
sistema que ficasse sempre ligando e desligando as lâmpadas em
uma seqüência pré-definida que seria: Ligar todas as lâmpadas,
uma de cada vez da esquerda para a direita, e depois desligar
todas de volta, também uma de cada vez. Esta seqüência deve ser
repetida indefinidamente.*/
int tempo1 = 500 ;


void setup()
{
pinMode(0, OUTPUT);
pinMode(1, OUTPUT);
pinMode(2, OUTPUT);
pinMode(3, OUTPUT);
}
void loop()
{
digitalWrite(3, HIGH);
delay(tempo1);

digitalWrite(2, HIGH);
delay(tempo1);

digitalWrite(1, HIGH);
delay(tempo1);

digitalWrite(0, HIGH);
delay(tempo1);  

digitalWrite(3, LOW);
delay(tempo1);
digitalWrite(2, LOW);
delay(tempo1);
digitalWrite(1, LOW);
delay(tempo1);
digitalWrite(0, LOW);
delay(tempo1);
}