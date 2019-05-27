var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(canvas.width/2, 75, 15/2*Math.PI, 0, 2 * Math.PI);
ctx.stroke();
