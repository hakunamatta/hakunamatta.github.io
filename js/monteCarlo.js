function generateRandomValue(min,experimentsCount){
  // var canvas = document.getElementById("canvas");
  // var ctx = canvas.getContext("2d");
  const uniqueNumber = [];
  //       Scanv = canvas.heigth*canvas.width;
  //
  // var   Sresult;
  //       n;
  //       N;

  for(var i=0;uniqueNumber.length < experimentsCount;i++){
    const randomNumber = Math.floor((Math.random() * experimentsCount - min) - min);

    if (uniqueNumber.indexOf(randomNumber) == -1) {

        uniqueNumber.push(randomNumber);

    }

  }



  return uniqueNumber;
}

function changeInputValue(){
  const input = document.getElementById('inputCont').value;

  console.log(generateRandomValue(1,input));

}
