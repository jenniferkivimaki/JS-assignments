/*Output:You are a child: False
Output:You are a teenager: False
Output:You are an adult: True
Instructions:○Create new HTML Project named P7Boolean
Open the app.js file.
  Start with a variable
■const birthYear = 2000;
do a few age-checks:
Save to a letvariable named isChild, when the age is from 0 till 10.
Save to a letvariable named isTeenager, when the age is from 11 to 17
Save to a letvariable named isAdult, when the age is 18 or more.
  Then, print them all to the console.
  Try with different birth years and account for edge cases (if birthYear is 2030?)
*/

/*
const birthYear= 2000;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;
//extra rad om man vill se ålderna också
console.log(ageOfPerson);

//10 or lower
let isChild= ageOfPerson <=10 ;
//11 or 17
let isTeenager=  (ageOfPerson >=11) && (ageOfPerson <=17) ;
//18 or more
let isAdult =    ageOfPerson >=18 ;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);
*/


let playerTouchGround = false;
let playerHasJetPack= true;

if (playerTouchGround) {
  console.log(" Player is one the ground ");
  console.log(" Player can jump ");
}

else if (playerHasJetPack) {
  console.log("Player can jet away");
}

else {
  console.log("Player is NOT on the ground! ");
console.log(" Player CANNOT jump!");
}
