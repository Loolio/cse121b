/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.getElementById("add1").value);
    let number2 = Number(document.getElementById("add2").value);
    let sum = add(number1, number2);
    document.getElementById("sum").value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let number1 = Number(document.getElementById("subtract1").value);
    let number2 = Number(document.getElementById("subtract2").value);
    let difference = subtract(number1, number2);
    document.getElementById("difference").value = difference;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(x, y) {
    return x / y;
}

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    // input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    // processing
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2; //if 20% is appled
    }
    // output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1 );
    document.getElementById("odds").innerHTML = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0 );
    document.getElementById("evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((sum, number) => sum + number);
    document.getElementById("sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplyBy2Array = numbersArray.map(number => number * 2);
    document.getElementById("multiplied").innerHTML = multiplyBy2Array

/* Output Sum of Multiplied by 2 Array */
let sourcemultiplyBy2Array = (numbersArray.reduce((sum, number) => sum + number))*2;
    document.getElementById("sumOfMultiplied").innerHTML = sourcemultiplyBy2Array