/*

function multipleBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}
console.log(multipleBySelf(4));

//funktion = vad heter den, vad behöver vi
//return = vad ska den ge tbx
//console =  välj funktion, skriv in dina värden
function AverageNumber(numberOne, numberTwo)  {
  return (numberOne + numberTwo) / 2;
}
console.log(AverageNumber(2,6));
// 2 + 6   /2




function Welcome(Name, lastName){
  return " Welcome " + Name + " " + lastName + "!";
}
console.log(Welcome("Jennifer", "Kivimäki"));
console.log(Welcome("Alex", "Tholsson"));



function Tack(Name, Name2){
  return " Tack " + Name + " och " + Name2;
}
console.log(Tack("Karolina","Alex"));

// få ut ålder
// född och nuvarande -
function Age (currentYear, birthYear){
  return "Du är " + (currentYear - birthYear) + " år gammal";
}
console.log(Age(2024,1991));



//få fram ett random nummer/resultat
//numret, i de här fallet 6 är alltså bara ett exempel, väljer av tal under 6

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
console.log(getRandomInt());


function convertNumbersToLetter(number) {
  if (number === 0) {return "A";}
  else if (number === 1) {return "B";}
  else if (number === 2) {return "C";}
  else {return "Not on the list";} //error-handling
}
console.log(convertNumbersToLetter(getRandomInt()));



Write a function that has 2 numbers
as parameters compares them
and returns the following results:
  Output: Both numbers are equal!
  Output: First number is greater!
  Output: Second number is greater
*/

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) return "Both numbers are equal!";
  else if (firstNumber > secondNumber) return "First number is greater!";
  else if (firstNumber < secondNumber) return "Second number is greater";
}

// else eller else if spelar ingen roll på de som är sist
let firstNumber = getRandomInt();
let secondNumber = getRandomInt();
console.log(firstNumber);
console.log(secondNumber);
console.log(compareNumbers(firstNumber, secondNumber));
