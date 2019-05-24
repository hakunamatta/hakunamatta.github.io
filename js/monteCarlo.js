function generateRandomValue(min,experimentsCount){
  const uniqueNumber = [];

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
