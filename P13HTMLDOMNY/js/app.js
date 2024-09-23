const textfield = document.getElementById('text0');
textfield.innerHTML = "Score: 0";

const button0 = document.getElementById('button0');
button0.addEventListener('click', function(){
 updateScoreText()
});

let score= 0;

function showScore(inputNumber) {
  return ++inputNumber ;
}

function updateScoreText(){
  return "You're score is:" + showScore()
}
