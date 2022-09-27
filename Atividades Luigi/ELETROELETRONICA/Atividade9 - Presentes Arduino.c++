#define bt1  13
#define bt2 12
#define bt3  11
#define bt4  10




void setup(){
pinMode(bt1, INPUT_PULLUP);
pinMode(bt2, INPUT_PULLUP);
pinMode(bt3, INPUT_PULLUP);
pinMode(bt4, INPUT_PULLUP);
Serial.begin(9600);

}

void loop(){
    if(digitalRead(bt1)==0){
        Serial.print("\nParabens!\n Voce ganhou um pirulito");
        while (digitalRead(bt1)==0){}
    }
     if(digitalRead(bt2)==0){
        Serial.print("\nParabens!\n Voce ganhou um cerveja");
         while (digitalRead(bt2)==0){}
    }
     if(digitalRead(bt3)==0){
        Serial.print("\nParabens!\n Voce ganhou um bicicleta");
         while (digitalRead(bt3)==0){}
    }
     if(digitalRead(bt4)==0){
        Serial.print("\nParabens!\n Voce ganhou um uno 0km");
         while (digitalRead(bt4)==0){}
    }


}