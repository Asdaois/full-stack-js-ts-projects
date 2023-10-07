function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return +(a * b).toFixed(2);
}
function divide(a, b) {
  return +(a / b).toFixed(2);
}
function operate(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
  }
  return result;
}

let operateValues = [];
const inputDisplay = document.querySelector("#input p");
function refreshInputDisplay() {
  inputDisplay.textContent = operateValues.join("");
}
let actualNumberIsFloat = false;
function addtoInputDisplay(value) {
  if (value == ".") {
    if (actualNumberIsFloat) {
      return;
    }
    actualNumberIsFloat = true;
  }
  if (value == "+") actualNumberIsFloat = false;
  if (value == "-") actualNumberIsFloat = false;
  if (value == "*") actualNumberIsFloat = false;
  if (value == "/") actualNumberIsFloat = false;
  operateValues.push(value);
  refreshInputDisplay();
}
const calculatorButtons = document.querySelectorAll(".number");
calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addtoInputDisplay(button.value);
  });
});

const resultDisplay = document.querySelector("#result p");
const equalButton = document.getElementById("equal");
function doOperations() {
  let firstNumber = [];
  let secondNumber = [];
  let operator = "";
  let firstNumberExist = false;
  let canOperate = false;
  let operationsNumber = 0;
  operateValues.map((number) => {
    if ((number >= 0 && number <= 9) || number == ".") {
      if (firstNumberExist) {
        secondNumber.push(number);
        return;
      }
      firstNumber.push(number);
    } else {
      if (canOperate) {
        //Verify if operation is done
        if (Array.isArray(firstNumber)) {
          firstNumber = firstNumber.join("");
        }
        //First number is the last operation
        firstNumber = operate(+firstNumber, +secondNumber.join(""), operator);
        secondNumber = [];
      }
      operator = number;
      firstNumberExist = true;
      canOperate = true;
      operationsNumber++;
    }
  });
  if (operationsNumber == 0) {
    resultDisplay.textContent = firstNumber.join("");
    return;
  }
  if (operationsNumber == 1) {
    firstNumber = firstNumber.join("");
  }
  let result = operate(+firstNumber, +secondNumber.join(""), operator);
  if (isNaN(+result) || result == Infinity) {
    resultDisplay.textContent = "Syntax Error";
    return;
  }
  operateValues.length = 0;
  resultDisplay.textContent = result;
}
equalButton.addEventListener("click", () => {
  doOperations();
});
const clearButton = document.getElementById("AC");
clearButton.addEventListener("click", () => {
  resultDisplay.textContent = 0;
  inputDisplay.textContent = "Input a number";
  operateValues.length = 0;
});
function pressBackspace() {
  operateValues.pop();
  refreshInputDisplay();
}
const backspace = document.getElementById("DEL");
backspace.addEventListener("click", () => {
  pressBackspace();
});
///Keyboard Support
window.addEventListener("keydown", (ekey) => {
  //console.log(ekey.key);
  let key = ekey.key;
  if (
    (key >= 0 && key <= 9) ||
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "/" ||
    key == "."
  ) {
    addtoInputDisplay(key);
  }
  if (key == "Backspace") {
    pressBackspace();
  }
  if (key == "Enter") {
    doOperations();
  }
});
