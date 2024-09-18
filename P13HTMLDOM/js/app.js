const text = document.getElementById('text');
const button=document.getElementById('button');


let score = 0;
function increaseBy(inputNumber) {
  return score += inputNumber;
}

function decreaseBy(inputNumber) {
  return score -= inputNumber;
}

function updateScore() {
  const textElement = document.getElementById('text');
  textElement.innerHTML = `Score: ${score}`;
}

document.getElementById('button').addEventListener('click', () => {
  increaseBy(1);
  updateScore();
});

document.getElementById('button1').addEventListener('click', () => {
  decreaseBy(1);
  updateScore();
});
