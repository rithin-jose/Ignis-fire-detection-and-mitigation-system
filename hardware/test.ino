#define roomARed 0
#define roomAGreen 1

#define roomBRed 2
#define roomBGreen 3

#define roomCRed 4
#define roomCGreen 5

#define roomDRed 6
#define roomDGreen 7

#define roomERed 8
#define roomEGreen 9

#define roomFRed 10
#define roomFGreen 11


void setup() {
  pinMode(roomARed,OUTPUT);
  pinMode(roomAGreen,OUTPUT);
  
  pinMode(roomBRed,OUTPUT);
  pinMode(roomBGreen,OUTPUT);
  
  pinMode(roomCRed,OUTPUT);
  pinMode(roomCGreen,OUTPUT);
  
  pinMode(roomDRed,OUTPUT);
  pinMode(roomDGreen,OUTPUT);
  
  pinMode(roomERed,OUTPUT);
  pinMode(roomEGreen,OUTPUT);

  pinMode(roomFRed,OUTPUT);
  pinMode(roomFGreen,OUTPUT);

  Serial.begin(9600);

}

void loop() {
  initial();
   while (Serial.available() > 0) {
   int roomNo = Serial.parseInt();
   
    if (Serial.read() == '\n') {
      dynamicLighting(roomNo);
      Serial.print(roomNo);
      Serial.print('\n');
   }
 }
}

void initial(){
  analogWrite(roomAGreen,255);
  analogWrite(roomBGreen,255);
  analogWrite(roomCGreen,255);
  analogWrite(roomDGreen,255);
  analogWrite(roomEGreen,255);
  analogWrite(roomFGreen,255);
}

void dynamicLighting(int room){
  if(room == 1){
    analogWrite(roomAGreen,0);
    analogWrite(roomARed,255);
  }
}