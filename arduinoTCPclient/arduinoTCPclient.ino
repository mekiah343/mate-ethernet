
/*
    Programmed by Mekiah Smith 4/6/2019-?
    (With parts borrowed/stolen from Nick Gammon and Michael E. Landon)
*/

#include <SPI.h>
#include <Ethernet.h>
#include <Servo.h>


class motor {
  byte pin;
  int pw = 1500;
public:
  motor(int _pin) { pin = _pin; }
  void addServo();
};

//Create Servos
Servo s1;
Servo s2;
Servo s3;
Servo s4;
Servo s5;
Servo s6;

//Servo* s = {"s1"};

motor m1 (1);
motor m2 (2);
motor m3 (3);
motor m4 (4);
motor m5 (5);
motor m6 (6);


// Set values below to match your network needs:
byte mac[] = {0x54, 0x52, 0x49, 0x41, 0x44, 0x00};   // MAC Address
byte ip[] = {169, 254, 254, 178};                          // Network Address
byte gateway[] = {192, 168, 1, 1};                      // Gateway Address
byte subnet[] = {255, 255, 0, 0};                  // Subnet Mask
EthernetServer server(6789);                           // Set Server Port
EthernetClient client;                               // Define client

String inString = "";


void setup()
{
  s1.attach(m1.pin);
  s2.attach(m2.pin);
  s3.attach(m3.pin);
  s4.attach(m4.pin);
  s5.attach(m5.pin);
  s6.attach(m6.pin);
  

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
      //client.print("Recieved");
      inString = "";
      
    }
    else
    {
      inString = inString + inByte;
    }
  }




  s1.writeMicroseconds(m1.pw);
  s2.writeMicroseconds(m2.pw);
  s3.writeMicroseconds(m3.pw);
  s4.writeMicroseconds(m4.pw);
  s5.writeMicroseconds(m5.pw);
  s6.writeMicroseconds(m5.pw);
}
