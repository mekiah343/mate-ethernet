// This everything between here and setInterval() are just to call
// Update every so miliseconds without freezing the program
function logEvery2Seconds(i) {
	setTimeout(() => {
		logEvery2Seconds(++i);
	}, 500)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
	update();
}, 500)
// ---

function minimize() {
	const { remote } = require('electron');
	remote.BrowserWindow.getFocusedWindow().minimize();
}

window.onclick = function() {
	console.log(navigator.getGamepads());
}

function update() {
	var gamepad = navigator.getGamepads()[0];
	updateGpButtons(gamepad);
	updateGpAxes(gamepad);

	client.write('Hello, server! Love, Client.');

}