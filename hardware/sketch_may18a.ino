#define BLUE 3
#define RED 6
#define GREEN 5


void setup(){
 pinMode(RED,OUTPUT);
 pinMode(GREEN,OUTPUT);
 pinMode(BLUE,OUTPUT);

 Serial.begin(9600);
}

void loop(){
  while (Serial.available() > 0) {
    int population = Serial.parseInt();
    
    if (Serial.read() == '\n') {
      checkDensity(population);
      Serial.print(population);
      Serial.print('\n');
    }
  }
}

void checkDensity(int pop){
  if(pop <= 10){
    setColor(0, 255, 0);
  }
  else if(pop > 10 && pop < 15){
    setColor(0, 0, 255);
  }
  else if(pop >= 15){
    setColor(255, 0, 0);
  }
}
void setColor(int redVal,int greenVal, int blueVal){
  analogWrite(RED, redVal);
  analogWrite(GREEN, greenVal);
  analogWrite(BLUE, blueVal);
}
