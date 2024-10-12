//your JS code here. If required.
let timer = document.getElementById("timer");
let currentTime = new Date();

setInterval(function() {
	currentTime = new Date();
	timer.innerHTML = currentTime.toLocaleString();
},1000)





