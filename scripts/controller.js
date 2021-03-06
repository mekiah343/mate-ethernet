var buttons = [];
var axes = [];
var maxForce = 1;

var joystick = {
	x : 0,
	y : 0
}

function interperateAxis() {
	lStick = joystick;
	lStick.x = axis[0];
	lStick.y = axis[1];
	
	rStick = joystick;
	rStick.x = axis[2];
	rStick.y = axis[3];
	console.log(rStick.x)
}

window.addEventListener("gamepadconnected", function(e) {
	var index = e.gamepad.index;
	var id = e.gamepad.id;
	var buttons = e.gamepad.buttons.length;
	var axes = e.gamepad.axes.length;
	var msg = new SpeechSynthesisUtterance('Commander, ' + id + ' has been connected at index ' + index + ',containing' + buttons + ' buttons and ' + axes + ' axes.');
	//window.speechSynthesis.speak(msg);
	controllerConnected = true;
	if (index == 0){
		initializeGp();
	}
});

// initialize gamepad
function initializeGp() {
	var gamepad = navigator.getGamepads()[0];

	// Things for initializing buttons
	console.log("hello")
	// Create the list element:
	var list = document.getElementById("controllerBtns");
	list.innerHTML = '';
	// Create a list item for each button
	for (i = 0;i < gamepad.buttons.length; i++) {
		// Create the list item:
		var item = document.createElement('li');
		item.id = "b"+i;
		var BtnVal = "true"
		// Set li text
		item.appendChild(document.createTextNode("epic"));
		// Add it to the list:
		list.appendChild(item);
	}

	// Basically the same as above but with axes instead of buttons
	var list = document.getElementById("controllerAxes");
	list.innerHTML = '';
	for (i = 0;i < gamepad.axes.length; i++) {
		// Create the list item:
		var item = document.createElement('li');
		item.id = "a"+i;
		var BtnVal = "true"
		// Set li text
		item.appendChild(document.createTextNode("epic"));
		// Add it to the list:
		list.appendChild(item);
	}
}

function updateGpAxes(gamepad){
	axis = gamepad.axes;
	if (!gamepad) {return}
	for (i = 0;i < gamepad.axes.length; i++) {
		document.getElementById("a"+i).innerHTML = i + ": " + gamepad.axes[i];
	}
	
	interperateAxis();
}

function updateGpButtons(gamepad){
	buttons = gamepad.buttons;
	if (!gamepad) {return}
	for (i = 0;i < gamepad.buttons.length; i++) {
		// If its true then change the text to say "true" and vise versa
		if (gamepad.buttons[i].pressed){ var BtnVal = "0" }	
		else { var BtnVal = " 1" }	
		// Apply changes
		document.getElementById("b"+i).innerHTML = "b" + i + ":" + BtnVal;
	}
}