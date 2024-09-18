// refererar text0 till variabeln som heter textfield0"
const textfield0 = document.getElementById("text0");
textfield0.innerHTML = multipleBySelf(8);

const headerText5 = document.getElementById("header5");
headerText5.innerHTML = "Min sida! ";
headerText5.style.color = "red";

const button0 = document.getElementById("button0");
button0.addEventListener("click", () => {
  button0();
});


const button1 = document.getElementById("button0");
button0.addEventListener("click", () => {
  button0();
});


function multipleBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}


let score ;
//skapa en funktion som ökar numret med 1
function increaseBy(inputNumber) {
  return ++inputNumber
}

