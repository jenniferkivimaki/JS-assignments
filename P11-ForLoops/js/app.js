function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 13; i++) {
  console.log(getRandomInt(6));
}

// UPPGIFT 2
for (let i = 1; i <= 1024; i*=2) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}



/* let firstNumber = 4;
let secondNumber = 24;
let result = firstNumber**secondNumber;
console.log(result); */


function power(firstNumber, exponent) {
  let result = firstNumber * exponent;;
  for (let i = 1; i <= exponent; i++) {
    result *= firstNumber;
  }
  console.log(result);
}


for (let i = 9; i >= 1; i--) {
  console.log(i + " green bottles hanging on the wall and if one bottle " +
    "would fall off, there would be " + i + " green bottles hanging on the wall");
}


let studentNames =["Oliva", "Ethan" , "Isabella" , "James", "Ava" , "Liam" , "Sophia" , "Noah", "Emma" , "Lucas"];
console.log(studentNames[5]);


//för att ändra eller lägga till
studentNames [3] = "Michael" ;  //välj 'numret/studenten' du vill ändra namn på i
studentNames.push ("Jennifer");


//kombinera ARRAYS med FOR LOOPS
for (let i = 0; i <studentNames.length; i++) {
  console.log("Good Morning " + studentNames [i] );
}


// EN ARRAY UTAN NÅGOT I   =     let randomNumberCount = [];

//
let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 100; i++) {
  let randomNumber = getRandomInt(10);
  //Computer, add 1 to "box 2".

  randomNumberCount[randomNumber] += 1;          //[2 eller randomNumber] betyder alltså box 2    +=1   betyder lägg till 1
console.log(randomNumber);
}

console.log(randomNumberCount);

for (let i = 0; i < randomNumberCount.length; i++) {
  console.log("I rolled " + i + " , " + randomNumberCount[i] + " times");
}

//FOR LOOPS OCH ARRAYS HAR EN NÄRA RELATION TILL VARANDRA OCH KOMBINERAS NÄSTAN JÄMT



function getRandomInt (max) {
  return Math.floor(Math.random() * max);

}