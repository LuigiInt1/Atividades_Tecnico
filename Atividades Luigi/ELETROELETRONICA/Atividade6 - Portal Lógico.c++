#include <Adafruit_LiquidCrystal.h>
Adafruit_LiquidCrystal lcd_1(0);
int tempo = 2000;

void setup(){
pinMode(0, OUTPUT);
pinMode(1, OUTPUT);
pinMode(2, OUTPUT);
pinMode(3, OUTPUT);
pinMode(4, OUTPUT);
pinMode(5, OUTPUT);
pinMode(6, OUTPUT);


lcd_1.begin(16,2);
lcd_1.cursor();
}

void loop(){
lcd_1.clear();

lcd_1.print("porta Logica E:");
lcd_1.setCursor(3,1);
lcd_1.print("0 E 0 = 0");
digitalWrite(0, LOW);
digitalWrite(1, LOW);
digitalWrite(2, LOW);
delay(tempo);

//lcd_1.print("porta Logica E:");
lcd_1.setCursor(3,1);
lcd_1.print("0 E 1 = 0");
digitalWrite(0, LOW);
digitalWrite(1, HIGH);
digitalWrite(2, LOW);
delay(tempo);


//lcd_1.print("porta Logica E:");
lcd_1.setCursor(3,1);
lcd_1.print("1 E 0 = 0");
digitalWrite(0, LOW);
digitalWrite(1, LOW);
digitalWrite(2, HIGH);
delay(tempo);

//lcd_1.print("porta Logica E:");
lcd_1.setCursor(3,1);
lcd_1.print("1 E 1 = 1");
digitalWrite(0, HIGH);
digitalWrite(1, HIGH);
digitalWrite(2, HIGH);
digitalWrite(3, HIGH);

delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);


lcd_1.clear();
lcd_1.print("porta Logica OU:");
lcd_1.setCursor(3,1);
lcd_1.print("0 E 0 = 0");
digitalWrite(0, LOW);
digitalWrite(1, LOW);
digitalWrite(2, LOW);
delay(tempo);

//lcd_1.print("porta Logica OU:");
lcd_1.setCursor(3,1);
lcd_1.print("0 E 1 = 1");
digitalWrite(0, HIGH);
digitalWrite(1, HIGH);
digitalWrite(2, LOW);
digitalWrite(4, HIGH);

delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);

//lcd_1.print("porta Logica OU:");
lcd_1.setCursor(3,1);
lcd_1.print("1 E 0 = 1");
digitalWrite(0, HIGH);
digitalWrite(1, LOW);
digitalWrite(2, HIGH);
digitalWrite(5, HIGH);

delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);

//lcd_1.print("porta Logica OU:");
lcd_1.setCursor(3,1);
lcd_1.print("1 E 1 = 1");
digitalWrite(2, HIGH);
digitalWrite(1, HIGH);
digitalWrite(0, HIGH);
digitalWrite(6, HIGH);

delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);
digitalWrite(0, HIGH);
delay(tempo/6);
digitalWrite(0, LOW);
delay(tempo/6);

digitalWrite(3, LOW);
digitalWrite(4, LOW);
digitalWrite(5, LOW);
digitalWrite(6, LOW);


}




