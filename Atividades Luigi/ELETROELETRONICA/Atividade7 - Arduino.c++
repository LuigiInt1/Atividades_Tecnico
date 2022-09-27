// C++ code
//
#include <Adafruit_LiquidCrystal.h>
int tempo = 500;
int controle=0;

Adafruit_LiquidCrystal lcd_1(0);

void setup()
{
pinMode(12, INPUT_PULLUP);
pinMode(13, OUTPUT);
lcd_1.begin(16,2);

}

void loop()
{
if(digitalRead(12)==0){
        digitalWrite(13,1);
   

        digitalWrite(13, 1);
        lcd_1.setCursor(4, 1);
        lcd_1.print("\nMINUTOS\n");
        controle++;

        lcd_1.setCursor(7,0);
        lcd_1.print("\n30\n");
        delay(tempo);
        controle++;

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n25\n");
        delay(tempo);
        controle++;

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n20\n");
        delay(tempo);
        

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n15\n");
        delay(tempo);
        

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n10\n");
        delay(tempo);
       

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n05\n");
        delay(tempo);
        
        lcd_1.setCursor(7, 0);
        lcd_1.print("\n01\n");
        delay(tempo);
        

        lcd_1.setCursor(7, 0);
        lcd_1.print("\n30\n");
        delay(tempo/2);
       

        lcd_1.clear();
        lcd_1.setCursor(0, 1);
        lcd_1.print("Roupas sequinhas");
        digitalWrite(13, 0);

       
        lcd_1.clear();    
    }

}