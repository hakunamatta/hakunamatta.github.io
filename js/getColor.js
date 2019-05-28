function getPixelColor(x,y,canvas){
    var ctx = canvas.getContext('2d');
    var pixelData = ctx.getImageData(x, y, 1, 1).data;
    var n = 0;

    return pixelData[3];

}
