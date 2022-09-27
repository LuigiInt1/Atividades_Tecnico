/*Depoimento do cliente: “Sou dono de um shopping e estou com um problema na sinaleira da
entrada/saída dos veículos. A minha sinaleira é uma daquelas que têm duas
lâmpadas se alternando entre ligado e desligado (uma liga, a outra desliga e viceversa) e a empresa que me vendeu faliu antes de terminar de instalar. As lâmpadas
já estão instaladas, faltando apenas o circuito para fazer o controle do acende/apaga das
mesmas”*/




void setup()
{
pinMode(0, OUTPUT);
pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(0, HIGH);
  delay (1000);
  digitalWrite(0, LOW);
  

 digitalWrite(1, HIGH);
  delay (1000);
  digitalWrite(1, LOW);
 
}









