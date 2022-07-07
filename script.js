const display = document.querySelector('.display');
const clears = document.querySelector('.clears');
const equals = document.querySelector('.equals');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

let num1 = '';
let num2 = '';
let operator = '';

//Assign each number a click event listener
numbers.forEach((num) => {
    num.addEventListener('click', function() { 
        setNum(num);
    });
});

//Assign each operator a click event listener
operators.forEach((operator) => {
    operator.addEventListener('click', function() { 
        setOperator(operator);
    });
});

//Assign equals a click event listener
equals.addEventListener('click', function() {
    operate();
});

//Assign clears a click event listener
clears.addEventListener('click', function() {
    clear();
});

//Function to set each number
function setNum(input) {
    num1 = num1.toString()
    if (!operator) {
        num1 = num1.concat(input.textContent);
        display.textContent = num1
    }
    if (operator) {
        num2 = num2.concat(input.textContent);
        display.textContent = `${num1} ${operator} ${num2}`
    }
}

//Function to set the operator
function setOperator(input) {
    if (operator) {
        operate();
    }
    if (!operator) {
        operator = input.textContent;
        display.textContent = `${num1} ${operator}`
    }
}

//Function to clear each number, operator, and display
function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = ''
}

//Function to operate based on assigned num1, num2, and operator
function operate() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator == '-') {
        num1 = subtract(num1, num2);
    }
    if (operator == '+') {
        num1 = add(num1, num2);
    }
    if (operator == '%') {
        num1 = divide(num1, num2);
    }
    if (operator == 'x') {
        num1 = multiply(num1, num2);
    }
    if (operator == '%' && num2 === 0) {
        num1 = `You don't have the facilities for that, big man`;
    }
    display.textContent = num1;
    operator = '';
    num2 = '';
}

//Function  for each basic math operator
function subtract() {
    return num1 - num2;
}

function add() {
    return num1 + num2;
}

function divide() {
    return num1 / num2;
}

function multiply() {
    return num1 * num2;
}