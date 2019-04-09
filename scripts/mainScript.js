// This everything between here and setInterval() are just to call
// Update every so miliseconds without freezing the program
function logEvery2Seconds(i) {
	setTimeout(() => {
		logEvery2Seconds(++i);
	}, 100)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
	var gamepads = navigator.getGamepads();
	update();
}, 100)
// ---

function minimize() {
	const { remote } = require('electron');
	remote.BrowserWindow.getFocusedWindow().minimize();
}



function update() {
	//updateButtonList();
}

var controllerConnected = false;
window.addEventListener("gamepadconnected", function(e) {
	var index = e.gamepad.index;
	var id = e.gamepad.id;
	var buttons = e.gamepad.buttons.length;
	var axes = e.gamepad.axes.length;
	var msg = new SpeechSynthesisUtterance('Commander, ' + id + ' has been connected at index ' + index + ',containing' + buttons + ' buttons and ' + axes + ' axes.');
	//window.speechSynthesis.speak(msg);
	controllerConnected = true;

	if (index == 0){
		initializeGP(e);
	}
});

// initialize gamepad
function initializeGP(gamepad) {
	//Things for initializing buttons

	// Create the list element:
	var list = document.getElementById("controllerBtns");
	list.innerHTML = '';
	// Create a list item for each button
	for (var i = 0; i < gamepad.buttons.length; i++) {
		// Create the list item:
		var item = document.createElement('li');
		var BtnVal = "true"
		// Set li text
		item.appendChild(document.createTextNode(" "));
		// Add it to the list:
		list.appendChild(item);
	}
}


/* not the most effective way of switching states but ehh, it works for now */

document.getElementById("input").style.display = "block"
document.getElementById("sensors").style.display = "none"
document.getElementById("console").style.display = "none"


document.getElementById("inputBtn").onclick = function(){
	document.getElementsByClassName("activeBtn")[0].classList.remove('activeBtn');
	this.classList.add('activeBtn');
	document.getElementById("input").style.display = "block"
	document.getElementById("sensors").style.display = "none"
	document.getElementById("console").style.display = "none"
}

document.getElementById("sensorsBtn").onclick = function(){
	document.getElementsByClassName("activeBtn")[0].classList.remove('activeBtn');
	this.classList.add('activeBtn');
	document.getElementById("input").style.display = "none"
	document.getElementById("sensors").style.display = "block"
	document.getElementById("console").style.display = "none"
}

document.getElementById("consoleBtn").onclick = function(){
	document.getElementsByClassName("activeBtn")[0].classList.remove('activeBtn');
	this.classList.add('activeBtn');
	document.getElementById("input").style.display = "none"
	document.getElementById("sensors").style.display = "none"
	document.getElementById("console").style.display = "block"
}
