#include <Adafruit_LiquidCrystal.h>

Adafruit_LiquidCrystal lcd_1(0);


int seg = 50;
int min= 9;
int hrs= 0;
int tempo = 10;

void setup(){
  lcd_1.begin(16, 2);

}

void loop(){


lcd_1.setCursor(10,0);
if(seg<10){
lcd_1.print("0");
}
lcd_1.print(seg);
delay(tempo);

if(seg==59){
seg=0; 
lcd_1.setCursor(8,0);
lcd_1.print(min);
min++;
}



seg++;












}





