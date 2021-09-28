// Function declaration

function resultA(number1, number2) {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
}

const result1 = resultA(2, 3);
console.log(result1);


// Function expression

const resultB = function (number1, number2) {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
};

const result2 = resultB(2, 3);
console.log(result2);

// Arrow function

const resultC = (number1, number2) => {
    var multipliedNumber1 = number1 * number1;
    var multipliedNumber2 = number2 * number2;
    var sumNumbers1 = multipliedNumber1 + multipliedNumber2;
    var squareNumbers1 = sumNumbers1 * sumNumbers1;
    return squareNumbers1;
};

const result3 = resultC(2, 3);
console.log(result3);