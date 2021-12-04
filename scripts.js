let operandA = null;
let operandB = null;
let operation = null; 
let result = null;

let divideByZero = false;

const add = (num1, num2) => (num1 + num2);

const subtract = (num1, num2) => (num1 - num2);

const multiply = (num1, num2) => (num1 * num2);

function divide(num1, num2) {
  if (num2 === 0) {
    divideByZero = true;
    operandB = null;
    operation = null;
    return null;
  } else {
    return (num1 / num2);
  }
}   

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
}


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


function refreshScreen() {
  if (divideByZero === true) {
    calcScreen.textContent = "Do not divide by 0!";
    initCalc();
    divideByZero = false;
  } else if (operandA === null && operation === null && operandB === null && result === null) {
    initCalc();
    calcScreen.textContent = operandA;
  } else if (operandA !== null && operation === null && operandB === null && result === null) {
    calcScreen.textContent = operandA;
  } else if (operandA !== null && operation !== null && operandB === null && result === null) {
    calcScreen.textContent = `${roundDecimal(operandA)} ${operation}`;
  } else if (operandA !== null && operation !== null && operandB !== null && result === null) {
    calcScreen.textContent = operandB;
  } else if (operandA !== null && operation !== null && operandB !== null && result !== null) {
    calcScreen.textContent = roundDecimal(result);
  }
}

function initCalc() {
  operandA = 0;
  operandB = null;
  operation = null;
  result = null;
}

function countDecimals(num) {
  if (num % 1 !== 0) {
    return num.toString().split('.')[1].length;
  } else {
    return 0;
  }
}

function roundDecimal(num) {
  let numDecimals = countDecimals(num);
  if (numDecimals >= 5) {
    return num.toFixed(5);
  } else {
    return num;
  }
}

function getResult() {
  result = operate(operandA, operandB, operation);
  operandA = result;
}

function clickNumBtn(num) {
  if (operandA === null && operation === null && operandB === null && result === null) {
    initCalc();
    operandA = num;
  } else if (operandA !== null && operation === null && operandB === null && result === null) {
    operandA = +`${operandA}${num}`;
  } else if (operandA !== null && operation !== null && operandB === null && result === null) {
    operandB = num;
  } else if (operandA !== null && operation !== null && operandB !== null && result === null) {
    operandB = +`${operandB}${num}`;
  } else if (operandA !== null && operation !== null && operandB !== null && result !== null) {
    operandA = result;
    operandB = num;
    result = null;
  }
  refreshScreen();
}

clearBtn.addEventListener('click', event => {
  initCalc();
  refreshScreen();
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
  if (operation === null) {
    operation = '+';
  } else if (operation !== null && operandA !== null && operandB !== null && result === null) {
    getResult();
    operation = '+';
  } else if (operation !== null && operandA !== null && operandB !== null && result !== null) {
    operation = '+';
    operandA = result;
    operandB = null;
    result = null;
  }
  refreshScreen();
});

minusBtn.addEventListener('click', event => {
  if (operation === null) {
    operation = '-';
  } else if (operation !== null && operandA !== null && operandB !== null && result === null) {
    getResult();
    operation = '-';
  } else if (operation !== null && operandA !== null && operandB !== null && result !== null) {
    operation = '-';
    operandA = result;
    operandB = null;
    result = null;
  }
  refreshScreen();
});

multiplyBtn.addEventListener('click', event => {
  if (operation === null) {
    operation = '*';
  } else if (operation !== null && operandA !== null && operandB !== null && result === null) {
    getResult();
    operation = '*';
  } else if (operation !== null && operandA !== null && operandB !== null && result !== null) {
    operation = '*';
    operandA = result;
    operandB = null;
    result = null;
  }
  refreshScreen();
});

divideBtn.addEventListener('click', event => {
  if (operation === null) {
    operation = '/';
  } else if (operation !== null && operandA !== null && operandB !== null && result === null) {
    getResult();
    operation = '/';
  } else if (operation !== null && operandA !== null && operandB !== null && result !== null) {
    operation = '/';
    operandA = result;
    operandB = null;
    result = null;
  }
  refreshScreen();
});

equalsBtn.addEventListener('click', event => {
  getResult();
  refreshScreen();
});

initCalc();
refreshScreen();