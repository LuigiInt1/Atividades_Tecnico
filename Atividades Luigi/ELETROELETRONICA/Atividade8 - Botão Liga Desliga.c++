int butao;
void setup()
{
pinMode(13, OUTPUT);
pinMode(12, INPUT);
}
// 0 : pressionado 
// 1 : solto
void loop()
{
 butao =  digitalRead(12); 
    if(butao==0){
        digitalWrite(13,1);
    }
    else{
        digitalWrite(13,0);
    }

}