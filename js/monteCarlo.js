function generateRandomValue(min,max){
  return Math.random() * (max - min) + min;
}

function changeInputValue(){
  const input = document.getElementById('inputCont').value;

  console.log(generateRandomValue(0,input));
}
