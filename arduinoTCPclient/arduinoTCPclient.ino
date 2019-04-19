
/*
    Programmed by Mekiah Smith 4/6/2019-?
    (With parts borrowed/stolen from Nick Gammon and Michael E. Landon)
*/

#include <SPI.h>
#include <Ethernet.h>
#include <Servo.h>


class motor {

public:
  // Values set when object created
  // Can also pass values
  // Ex: motor(int _pin) { s.attach(_pin); }
  //motor() {} // Default values
  //~motor() {} //  destructor, it destroys the instance, frees up memory, etc. etc.
   
   void init(int _pin){
     s.attach(_pin);
     Serial.print("Initializing pin ");
     Serial.println(_pin);
     s.writeMicroseconds(1500);
   }
   void setPw(int _pw){
     s.writeMicroseconds(_pw);
   }
  
 private:
  int pin;
  Servo s;
};

const int motorAmt = 6; // amount of motors I'll have
int pins[motorAmt] = {3,5,6,10,11,12}; // motor mins
motor * m[motorAmt]; // motor object
int i; // index...
motor * mP; // motor object pointer



// Set values below to match your network needs:
byte mac[] = {0x54, 0x52, 0x49, 0x41, 0x44, 0x00};   // MAC Address
byte ip[] = {192, 168, 0, 2};                          // Network Address
//byte gateway[] = {192, 168, 0, 1};                      // Gateway Address
//byte subnet[] = {255, 255, 255, 0};                  // Subnet Mask
EthernetServer server(6789);                           // Set Server Port
EthernetClient client;                               // Define client

String inString = "";

void setup()
{
  Serial.begin(9600);
  for (i = 0; i < motorAmt; i++){
    mP = new motor;
    //mP->init(pins[i]);
    m[i] = mP;
    m[i]->init(pins[i]);
  }
  delay(2000);


  Ethernet.begin(mac, ip);          // (mac, ip, gateway, subnet); Start the Ethernet connection
  server.begin();                                    // Begin acting like a server
}                                                    // A MEGA could easily handle more

void loop()
{
  char inByte;                  // Set up a character buffer to grab the input
  client = server.available();  // Check for server availability
  if(client)
  {

    inByte = client.read();     // Read the character in the buffer
    if (inByte == ' ')
    {
      Serial.println(inString);
      client.print(inString);
      int mNum = inString.charAt(0); // Fetch which motor to move then move it
      inString.remove(0,1); // Fetch pulse width
      int mPw = inString.toInt();
      m[mNum]->setPw(mPw);
      
      inString = "";
    }
    else
    {
      inString = inString + inByte;
    }
  }
  
}
