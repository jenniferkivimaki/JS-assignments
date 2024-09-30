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




