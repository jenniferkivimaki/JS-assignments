const birthYear = 2010;
const currentYear = 2024;
const favouriteNumber = 13;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;


if (isChild) {
  console.log("You are a child");
}
  if (isTeenager) {
    console.log
    ("You are a teenager");
  }
  if (isAdult) {
    console.log("You are a adult");
}

if (favouriteNumber > ageOfPerson) {
  console.log( "Favourite number is greater" );
}
if (favouriteNumber < ageOfPerson)
  console.log( "Favourite number is less" );

else if (favouriteNumber === ageOfPerson)
  console.log( "They are same!" );

//Print whether the favorite number is odd or even

if (favouriteNumber % 2===0) {
console.log("Favourite number is even!");
}

else console.log( "Favourite number is odd!")

console.log(favouriteNumber % 2===0  ? "Favourite number is even!" : "Favourite number is odd!");


//Output "You are a child"
//Output "You are a teenager"
//Output "You are a adult"
