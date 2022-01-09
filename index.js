function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {

    switch (operation) {
        case 'addition':
            return add(a, b);
        case 'subtraction':
            return subtract(a, b);
        case 'multiplication':
            return multiply(a, b);
        case 'division':
            return divide(a, b);

        default:
            console.log("Error calculation");
            break;
    }
}

/////////////////// values /////////////////////

const displayDiv = document.querySelector('.display-value');
let currentValue = displayDiv.value;

///////////////// event listeners NUMBERS ///////////

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const btn0 = document.querySelector('.btn-0');

btn1.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 1;
        return;
    }
    displayDiv.value += 1;
});

btn2.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 2;
        return;
    }
    displayDiv.value += 2;
});

btn3.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 3;
        return;
    }
    displayDiv.value += 3;
});

btn4.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 4;
        return;
    }
    displayDiv.value += 4;
});

btn5.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 5;
        return;
    }
    displayDiv.value += 5;
});

btn6.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 6;
        return;
    }
    displayDiv.value += 6;
});

btn7.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }    
    if (displayDiv.value == 0) {
        displayDiv.value = 7;
        return;
    }
    displayDiv.value += 7;
});

btn8.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 8;
        return;
    }

    displayDiv.value += 8;
});

btn9.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value == 0) {
        displayDiv.value = 9;
        return;
    }
  
    displayDiv.value += 9;
});

btn0.addEventListener('click', () => {
    if (displayDiv.value == 0) {
        return;
    }
    displayDiv.value += 0;
});

/////////////////// clear display //////////

const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', clear);

function clear() {
    displayDiv.value = 0;
};

const btnBackspace = document.querySelector('.btn-backspace');
btnBackspace.addEventListener('click', () => {
    displayDiv.value = parseInt(displayDiv.value / 10);
});

////////////// Event Listeners Operations ////////////

const btnAdd = document.querySelector('.btn-addition');
const btnSub = document.querySelector('.btn-subtraction');
const btnMult = document.querySelector('.btn-multiplication');
const btnDivide = document.querySelector('.btn-division');
const btnEquals = document.querySelector('.btn-equals');

let firstOperand = 0;
let secondOperand = 0;
let operator = '';
let operationActive = false;
let operation = {}


btnEquals.addEventListener('click', () => {
    secondOperand = parseInt(displayDiv.value);
    clear();
    displayDiv.value = operate(firstOperand, secondOperand, operator);
    operationActive = true;
});

////////// operations ////////////

btnAdd.addEventListener('click', () => {
    firstOperand = parseInt(displayDiv.value);
    operationActive = true;
    operator = 'addition';
});

btnSub.addEventListener('click', () => {
    firstOperand = parseInt(displayDiv.value);
    operationActive = true;
    operator = 'subtraction';
});

btnMult.addEventListener('click', () => {
    firstOperand = parseInt(displayDiv.value);
    operationActive = true;
    operator = 'multiplication';
});

btnDivide.addEventListener('click', () => {
    firstOperand = parseInt(displayDiv.value);
    operationActive = true;
    operator = 'division';
});















// const allNumbers = document.querySelectorAll('.btn-number');

// function addTempClearEvent () {
    
//     allNumbers.forEach(numberKey => {
//         numberKey.addEventListener('click', () => {
//             displayDiv.value = '';
//         });
//     });
// }

// function removeTempClearEvent () {
    
//     allNumbers.forEach(numberKey => {
//         numberKey.removeEventListener()});
// }



