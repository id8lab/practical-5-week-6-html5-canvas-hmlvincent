// JavaScript Document

/*function drawOnLoad(){
	var canvas = document.getElementById("mycvs");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = 'rgb(0,0,255)';
	ctx.fillRect(20,20, 100, 50);
	
	ctx.fillStyle = 'rgba(255,0,0,0.5)';
	ctx.beginPath();
	ctx.arc(120, 50, 10, 0, 2*Math.PI);
	ctx.fill();

	ctx.clearRect(0, 0, canvas.width, canvas.height);
} */

var x =0;
var xSpeed = 2; 

function drawRect() {
	var canvas = document.getElementById("mycvs");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = 'rgb(0,0,255)';
	ctx.fillRect(x, 100, 10, 10);
	
}

function update(){
//	ctx.clearRect(0,0, canvas.width, canvas.height); //
	x += xSpeed
	drawRect();
}

setInterval(update, 1000/60);