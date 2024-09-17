/* walk three steps forward.
then turn around and
walk three steps forward
then turn left and
walk three steps forward.
then turn left and
walk one step forward.
then turn around and
walk one step forward */

walkThreeSteps();
turnAround();
walkThreeSteps();
turnLeft();
walkThreeSteps();
turnRight();
stepForward();
turnAround();
stepForward();

function stepForward() {
  console.log("Move forward")
}
function turnRight() {
  console.log("turn right")
}
function turnLeft() {
  console.log("turn left")
  console.log("turn left")
  console.log("turn left")
}
function walkThreeSteps(){
stepForward();
stepForward();
stepForward();
}
function turnAround(){
turnRight();
turnRight();
}
