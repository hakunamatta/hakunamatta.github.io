function getPixelColor(x,y,canvas){
    var ctx = canvas.getContext('2d');
    var pixelData = ctx.getImageData(x, y, 1, 1).data;
    var n = 0;

    return pixelData[3];
    // if(pixelData[3] > 0){
    //   n = n + 1;
    // }
    // console.log(n);
}
