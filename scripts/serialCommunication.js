var net = require('net');
 
 // Sleep function
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var sp = require('serialport');
  const Readline = require('@serialport/parser-readline')
  var myPort = 'COM4'

  // Create a list of serial ports...
  // Store the address of the first one
  sp.list(function(err, ports) {
    try {
      var myPort = ports[0].comName
      console.log("Using port: " + myPort);
    }catch(err) {
      console.log("No available ports");
    }
  });

  // Connect to the port
  const port = new sp(myPort, { baudRate: 9600 })

  // Create a parser object
  const parser = new Readline()
  port.pipe(parser)

  function logEvery2Seconds(i) {
    setTimeout(() => {
        logEvery2Seconds(++i);
    }, 500)
  }

  logEvery2Seconds(0);

  let i = 0;
  setInterval(() => {
    console.log(parser.on('data', line => console.log(`> ${line}`)))
    port.write('a')
  }, 500)