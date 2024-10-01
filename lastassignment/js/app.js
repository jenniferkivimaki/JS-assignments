// A B C D E F
/* const gradeIdTextField = document.getElementById("grade");

let grade= 79;

function getGrade() {
  if (grade >= 90 && grade <= 100) {
    gradeIdTextField.innerHTML = "A";

  } else if (grade >= 80 && grade <= 89) {
    gradeIdTextField.innerHTML = "B";

  } else if (grade >= 70 && grade <= 79) {
    gradeIdTextField.innerHTML = "C";

  } else if (grade >= 60 && grade <= 69) {
    gradeIdTextField.innerHTML = "D";
  }
  else if (grade >= 0 && grade <=59) {
  gradeIdTextField.innerHTML = "F";
  }
  else
    gradeIdTextField.innerHTML = "Not valid!";
}

getGrade();


//UPPGIFT TVÅ

let input1= 12;
let input2= -7;
let input3= 100;

function getMinMax(){
let minumum = 0;
let maximum= 0;

if (input1 > input2 && input1 > input3)   {
   maximum=input1;
}
if (input2 > input1 && input2 > input3)   {
   maximum=input2;
}
if (input3 > input1 && input3 > input2) {
   maximum=input3;
}
if (input1 < input2 && input1 < input3) {
   minumum=input1;
}
if (input2 < input2 && input2 < input3) {
   minimum=input2;
}
if (input3 < input1 && input3 < input2) {
   minimum=input3;
}

return "Min:" + minumum + " , " + "Max:" + maximum;
}

getMinMax();

*/

//E7 Random_Password
// Design a program that generates a random password with 6 characters, digits or symbols

//  _   _   _   _   _   _      (6 siffror/bokstäver eller symboler typ allt på tagnentbordet)
//  [ det här är en ARRAY som symboliserar av dessa kantiga paranteser]
// Vi ska alltså skapa ett lösenord (en string, därför har vi tecknen inom ""


const possibleCharacters= ["0","1","2","3","4","5","6","7","8","9", "a", "b",
  "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
  "t", "u", "v", "w", "x", "y", "z" , "!", "@" , "#" , "€" , "%" , "/" , "(" , ")" , "=" , "?"];

// console.log(possibleCharacters.length);
//Nu vet vi att vi har 46 symboler i vår array


function getRandomInt(max) {
  return Math.floor(Math.random() * possibleCharacters.length) ;
}

// console.log(getRandomInt());
//consol.logga varje gång för att testa att funktionen funkar ALLTID innan du går vidare
// i är bara namnet men är standard, i, j , k men kan likka gärna vara jennifer


for (let i = 0; i < 6; i ++) {
let randomArrayIndex = getRandomInt();
console.log(possibleCharacters[randomArrayIndex]);
}

// nu funkar funktionen, den tar ut 6 random "boxar" ur arrayen

//possibleCharacters[2];             hitta värdet av box 2
//possibleCharacters.indexOf ("a");        för att hitta index-numret av "a/innehållet i indexet"
