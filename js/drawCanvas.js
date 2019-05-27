function draw(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.beginPath();
  //ctx.arc(canvas.width/2, canvas.height/2, 40, 0, 2 * Math.PI);
  ctx.rect(75, 20, 150, 100);
  ctx.fill();
  ctx.stroke();
}
window.onload = draw();
