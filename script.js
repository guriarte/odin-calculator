const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber;
let secondNumber;
let currentOperator;
let operatorClicked;

function operate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(`Inside operate: ${a} ${b} ${operator}`);

  switch (operator) {
    case "+":
      console.log("here");

      return sum(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    default:
      break;
  }
}

const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const equalsButton = document.querySelector(".equals-button");

number.forEach((element) => {
  element.addEventListener("click", () => {
    if (operatorClicked) {
      display.textContent = "";
      operatorClicked = false;
      display.textContent += `${element.textContent}`;
      return;
    }
    display.textContent += `${element.textContent}`;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorClicked = true;
    if (!firstNumber) {
      firstNumber = display.textContent;
      currentOperator = operator.textContent;
      console.log(
        `Inside first if: ${firstNumber}, ${secondNumber}, ${currentOperator}`
      );
      return;
    }
    console.log(
      `Before operate: ${firstNumber}, ${secondNumber}, ${currentOperator}`
    );

    secondNumber = display.textContent;
    display.textContent = firstNumber;
    firstNumber = operate(firstNumber, secondNumber, currentOperator);
    currentOperator = operator.textContent;
    console.log(
      `After operate: ${firstNumber}, ${secondNumber}, ${currentOperator}`
    );
    display.textContent = firstNumber;
  });
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
});

equalsButton.addEventListener("click", () => {
  secondNumber = display.textContent;
  display.textContent = operate(firstNumber, secondNumber, currentOperator);
});

function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
}
