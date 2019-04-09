
/*
    Programmed by Mekiah Smith 4/6/2019-?
    (With parts borrowed/stolen from Nick Gammon and Michael E. Landon)
*/

#include <SPI.h>
#include <Ethernet.h>


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
      client.print("Result:" + inString);
      inString = "";
    }
    else
    {
      inString = inString + inByte;
    }
  }
}
