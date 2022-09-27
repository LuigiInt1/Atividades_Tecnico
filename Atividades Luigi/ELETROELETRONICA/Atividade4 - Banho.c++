/*Eu preciso de um sistema que corte a energia do chuveiro após 5
minutos de banho. Se este sistema não der um jeito nela, vou acabar levando ela para um
convento ou algo parecido!”.
*/
int tempo1 =  5000  ;
void setup()
{
pinMode(0, OUTPUT);
}

void loop()
{
digitalWrite(0, HIGH);
delay(tempo1);
digitalWrite(0, LOW);
delay(tempo1);
}



