
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
