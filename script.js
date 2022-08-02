// first thing- User selects first number and store that number in const || let
// Second thing- User selects operator and store that operator in const || let
// thrid thing- User seclcts second number and store that number in const || let
const keys = document.querySelector(".calculator_keys");
const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const operatorKeys = keys.querySelectorAll('[data-type="operator"]');

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  // is this a number?
  if (type === "number") {
    if (displayValue === "0") {
      display.textContent = keyValue;
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }

    calculator.dataset.previousKeyType = "number";
  }

  if (type === "operator") {
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    key.dataset.state = "selected";

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;

    calculator.dataset.previousKeyType = "operator";
  }

  // if type == 'add'
  // firstNumber + secondNumber

  // if type == 'minus'
  // firstNumber - secondNumber

  // if type == 'mul'
  //firstNumber - secondNumber

  // if type == 'div'
  // firstNumber / secondNumber
  if (type == "equal") {
    const firstNumber = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);

    let result = "";
    if (operator == "plus") result = firstNumber + secondNumber;
    if (operator == "minus") result = firstNumber - secondNumber;
    if (operator == "divide") result = firstNumber / secondNumber;
    if (operator == "times") result = firstNumber * secondNumber;

    display.textContent = result;
  }

  if (type == "clear") {
    display.textContent = "";
  }
});

// when user clicks button display number
