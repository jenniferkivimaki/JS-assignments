document.body.style.backgroundColor = 'lightgray';

const text = document.getElementById('text');
const button=document.getElementById('button');
const header=document.getElementById('header');
header.innerHTML='';

let score = 0;
function increaseBy(inputNumber) {
return score += inputNumber ;
}

function decreaseBy(inputNumber) {
 return score -= inputNumber;
  }


  function updateScore() {
    const textElement = document.getElementById('text');
    textElement.innerHTML = `Score: ${score}`;

    if (score >= 10) {
      textElement.innerHTML += `<br>You won!`;
    }

    else if (score <= -10) {
      textElement.innerHTML += `<br>You loose!`;
    }

  }

    document.getElementById('button').addEventListener('click', () => {
      increaseBy(1);
      updateScore();
    });

    document.getElementById('button1').addEventListener('click', () => {
      decreaseBy(1);
      updateScore();
    });



    //funktionerna ska redan finnas, sen kan man bara hämta dem med id, och välja sina värden
//kan skriva ut funktioner, utan att de används, och det går att köra ändå
//fråga om <br>
