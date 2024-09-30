// A B C D E F
const gradeIdTextField = document.getElementById("grade");

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
