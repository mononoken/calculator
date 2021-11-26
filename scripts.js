let calculation = 0;

const add = (num1, num2) => (num1 + num2);

const subtract = (num1, num2) => (num1 - num2);

const multiply = (num1, num2) => (num1 * num2);

const divide = (num1, num2) => (num1 / num2);

function operate(num1, num2, operator) {
  switch (operator) {
    case 'addition':
      return add(num1, num2);
      break;
    case 'subtraction':
      return subtract(num1, num2);
      break;
    case 'multiplication':
      return multiply(num1, num2);
      break;
    case 'division':
      return divide(num1, num2);
      break;
  }
}

let calcScreen = document.getElementById('calc-screen');
let clearBtn = document.getElementById('clear-btn');

function clearScreen() {
  calculation = 0;
  calcScreen.textContent = calculation.toString();
}

clearBtn.addEventListener('click', event => {
  clearScreen();
});

// Was writing function to clear screen.