function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const operators = ['+', '-'];
function createTask() {
  console.log('start');
  let firstNumber = getRandomInt(1, 101);
  let secondNumber = getRandomInt(1, 101);
  let operatorNumber = getRandomInt(0, 2);
  return firstNumber + operators[operatorNumber] + secondNumber;
}

export default createTask;
