#define buzzer 12

void setup() {
  pinMode(buzzer,OUTPUT);

 Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(buzzer,HIGH);
  delay(2000);
}
