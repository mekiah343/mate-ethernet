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
