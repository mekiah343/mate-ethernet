
var net = require('net');

var client = new net.Socket();
client.connect(6789, '192.168.0.2', function() {
	console.log('ClientConnected');
	client.write('Sent ');
});

client.on('data', function(data) {
	console.log('Received: ' + data);

	client.write('Recieved ')
	//client.destroy(); // kill client after server's response
});



client.on('close', function() {
	console.log('Connection closed');
});
