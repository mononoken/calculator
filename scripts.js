let calculation = 0;
let operand = 0;
let operation = null; 

const calcScreen = document.getElementById('calc-screen');
const clearBtn = document.getElementById('clear-btn');

const zeroBtn = document.getElementById('zero-btn');
const oneBtn = document.getElementById('one-btn');
const twoBtn = document.getElementById('two-btn');
const threeBtn = document.getElementById('three-btn');
const fourBtn = document.getElementById('four-btn');
const fiveBtn = document.getElementById('five-btn');
const sixBtn = document.getElementById('six-btn');
const sevenBtn = document.getElementById('seven-btn');
const eightBtn = document.getElementById('eight-btn');
const nineBtn = document.getElementById('nine-btn');

const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const equalsBtn = document.getElementById('equals-btn');

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

function refreshScreen() {
  calcScreen.textContent = calculation;
}

function clearCalcs() {
  calculation = 0;
  operand = 0;
  operation = null;
  refreshScreen();
}

function clickNumBtn(num) {
  if (calculation === 0) {
    calculation = num;
  } else {
    calculation = +`${calculation}${num}`;
  }
  refreshScreen();
}

clearBtn.addEventListener('click', event => {
  clearCalcs();
});

oneBtn.addEventListener('click', event => {
  clickNumBtn(1);
});

twoBtn.addEventListener('click', event => {
  clickNumBtn(2);
});

threeBtn.addEventListener('click', event => {
  clickNumBtn(3);
});

fourBtn.addEventListener('click', event => {
  clickNumBtn(4);
});

fiveBtn.addEventListener('click', event => {
  clickNumBtn(5);
});

sixBtn.addEventListener('click', event => {
  clickNumBtn(6);
});

sevenBtn.addEventListener('click', event => {
  clickNumBtn(7);
});

eightBtn.addEventListener('click', event => {
  clickNumBtn(8);
});

nineBtn.addEventListener('click', event => {
  clickNumBtn(9);
});

zeroBtn.addEventListener('click', event => {
  clickNumBtn(0);
});

plusBtn.addEventListener('click', event => {
  operation = 'addition';
  operand = calculation;
  calculation = 0;
  refreshScreen();
});

minusBtn.addEventListener('click', event => {
  operation = 'subtraction';
  operand = calculation;
  calculation = 0;
  refreshScreen();
});

multiplyBtn.addEventListener('click', event => {
  operation = 'multiplication';
  operand = calculation;
  calculation = 0;
  refreshScreen();
});

divideBtn.addEventListener('click', event => {
  operation = 'division';
  operand = calculation;
  calculation = 0;
  refreshScreen();
});

equalsBtn.addEventListener('click', event => {
  calculation = operate(operand, calculation, operation);
  refreshScreen();
});