function generateRandomValue(experimentsCount){

  const points = [];
  const width = canvas.width;
  const height = canvas.height;


  for(var i=0; i < experimentsCount;i++){
      const xRand = Math.floor((Math.random() * width));
      const yRand = Math.floor((Math.random() * height));
      points.push({x: xRand, y: yRand});
    }
    return points;
}

function changeInputValue(){
  const input = document.getElementById('inputCont').value;
  const a = generateRandomValue(input);
  var ctx = canvas.getContext("2d");
  var s = canvas.height*canvas.width;
  var arrOfPixel = []
  var n = 0;
  for (var i = 0; i < a.length; i++){
      arrOfPixel.push(getPixelColor(a[i].x, a[i].y, canvas));
      if(arrOfPixel[i] > 0){
        n++;
      }
  }
  console.log('Приблизительное значени площади искомой фигуры: ',squareEstimation(n,input,s));
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  drawPoints(a);
}
