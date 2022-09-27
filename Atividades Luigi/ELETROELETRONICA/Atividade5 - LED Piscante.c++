int chuveiro = 6;
int led3 = 3;
int led2 = 2;
int led1 = 1;
int led0 = 0;
int led4 = 4;
int minuto =  2000;

void setup()
{
pinMode(6, OUTPUT);
pinMode(3, OUTPUT);
pinMode(2, OUTPUT);
pinMode(1, OUTPUT);
pinMode(0, OUTPUT);
pinMode(4, OUTPUT);

digitalWrite(chuveiro, 1);
digitalWrite(led3, 1);
digitalWrite(led2, 1);
digitalWrite(led1, 1);
digitalWrite(led0, 1);
digitalWrite(led4, 1);
delay(minuto);

digitalWrite(led3, 0);
delay(minuto);

digitalWrite(led2, 0);
delay(minuto);

digitalWrite(led1, 0);
delay(minuto);

digitalWrite(led0, 0);
delay(minuto);


}
void loop()
{
digitalWrite(led4, 1);
delay(100);
digitalWrite(led4, 0);
delay(100);
}















