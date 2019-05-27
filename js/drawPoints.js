function dot(x,y,canvas){
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, 1, 0, Math.PI*2);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();
}



function drawPoints(points){

  for(var i = 0; i < points.length; i++){
    dot(points[i].x, points[i].y, canvas)
  }

}
