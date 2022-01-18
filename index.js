function add(a, b) {

    // adding can be confused with concatenation, so this data preparation is necessary
    // to make calculations work

    a = Number(a);
    b = Number(b)
        
    let result = a + b;

    return String(result);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b == 0) {
        errorAlarm();
        return 'Error!';
    }

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

///////////////// NUMBERS ///////////

const allBtns = document.querySelectorAll('button');
allBtns.forEach( button => {
        button.addEventListener('click', playBeep);
        }
);


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

btn1.addEventListener('click', () => btnNumberPress(1));
btn2.addEventListener('click', () => btnNumberPress(2));
btn3.addEventListener('click', () => btnNumberPress(3));
btn4.addEventListener('click', () => btnNumberPress(4));
btn5.addEventListener('click', () => btnNumberPress(5));
btn6.addEventListener('click', () => btnNumberPress(6));
btn7.addEventListener('click', () => btnNumberPress(7));
btn8.addEventListener('click', () => btnNumberPress(8));
btn9.addEventListener('click', () => btnNumberPress(9));


function btnNumberPress (number) {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = number;
        return;
    }  
    displayDiv.value += number;
    
}

btn0.addEventListener('click', btnNumberZero); 

function btnNumberZero () {    
    if(operationActive) {
        clear();
    }
    
    if (displayDiv.value !== '0' || displayDiv.value === '0.') {
        displayDiv.value += 0;
    }   
}

////////////////////// change Sign ///////////////////////

function switchSign () {
    displayDiv.value *= -1;
}

const btnSign = document.querySelector('.btn-sign');
btnSign.addEventListener('click', switchSign);

/////////////////// clear display //////////

function clear() {
    displayDiv.value = 0;
    operationActive = false;
};

function clearAll() {
    displayDiv.value = 0;
    operationActive = false;
    resultOfLastOperation[0] = 0;
    secondOperand = false;
    operator = 'none';
};

function backspace() {
    displayDiv.value = parseInt(displayDiv.value / 10);    
}

const btnClear = document.querySelector('.btn-clear-all');
const btnClearEntry = document.querySelector('.btn-clear-entry');
const btnBackspace = document.querySelector('.btn-backspace');

btnClear.addEventListener('click', clearAll);
btnClearEntry.addEventListener('click', clear);
btnBackspace.addEventListener('click', backspace);


//////////// INSERT A DOT (OPERATE WITH FLOATS) //////////////////////

function insertDot () {
    
    if(displayDiv.value.indexOf(".") === -1) {
        displayDiv.value += '.';
    }
}

const btnDot = document.querySelector('.btn-dot');
btnDot.addEventListener('click', insertDot);

////////////// Event Listeners Operations ////////////

const btnAdd = document.querySelector('.btn-addition');
const btnSub = document.querySelector('.btn-subtraction');
const btnMult = document.querySelector('.btn-multiplication');
const btnDivide = document.querySelector('.btn-division');
const btnEquals = document.querySelector('.btn-equals');

let secondOperand = false;
let operationActive = false;
const resultOfLastOperation = [];
let operator = 'none';

////////////////////// RESULT ///////////////////////

btnEquals.addEventListener('click', pressEquals); 

function pressEquals () {

    if(operator === 'none') {
        return;
    } else {
        resultOfLastOperation[0] = operate(resultOfLastOperation[0], displayDiv.value, operator);    
        clear();
        displayDiv.value = resultOfLastOperation[0];
        operationActive = true;
        operator = 'none';
        secondOperand = false;
    }
}

////////// OPERATIONS ////////////

btnAdd.addEventListener('click', () => pressOperator('addition'));
btnSub.addEventListener('click', () => pressOperator('subtraction'));
btnMult.addEventListener('click', () => pressOperator('multiplication'));
btnDivide.addEventListener('click', () => pressOperator('division'));

 function pressOperator (operationName) {

    if (!secondOperand) {
        resultOfLastOperation[0] = displayDiv.value;        
        secondOperand = true;
        operator = operationName;    
    } else {
        resultOfLastOperation[0] = operate(resultOfLastOperation[0], displayDiv.value, operator);
        displayDiv.value = resultOfLastOperation[0];        
        operator = operationName;
    }
    operationActive = true;
}

///////////////////   CLOCK      ///////////////////////

const showTime = document.querySelector('.active-time');
const timeDisplay = document.querySelector('.time');

function showCurrentTime () {
    
    setInterval(() => {
    const now = new Date();

    let hours = now.getHours();
        if (now.getHours() < 10) {
            hours = "0" + now.getHours();
        }

    let minutes = now.getMinutes();

        if (now.getMinutes() < 10) {
            minutes = "0" + now.getMinutes();
        }
    
    let seconds = now.getSeconds();

        if (now.getSeconds() < 10) {
            seconds = "0" + now.getSeconds();
        }
    
        timeDisplay.textContent = `${hours}:${minutes}  ${seconds}`;
    }, 1000);
    
};

showCurrentTime();

/////////////////////////////////////////////////////////
///////////////////// DATE //////////////////////////////
/////////////////////////////////////////////////////////

function showDate () {

    const date = new Date();
    
    var options = { month: 'long'};
    let month = new Intl.DateTimeFormat('en-US', options).format(date);
    month = month.slice(0,3).toLocaleUpperCase();    
    
    let year = date.getFullYear();
    year = String(year);
    year = year.slice(-2);

    const day = date.getDate();

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const dayOfWeek = weekdays[date.getDay()].slice(0,3).toLocaleUpperCase();

    const dateDisplay = document.querySelector('.date');
    dateDisplay.textContent = `${dayOfWeek} \u00A0 ${month}, ${day} \u00A0 ${year}`;
}

showDate();

///////////////////////////// 

const modeBtn = document.querySelector('.mode-btn');
const timeDisplayOnOff = document.querySelector('.time');
const calculatorDisplayOnOff = document.querySelector('.calculator-display');
let appMode = 'Watch';

modeBtn.addEventListener('click', modeSwitch);

function modeSwitch () {
    // toggles would be dependent on CSS order of statements, best to 
    // do it manually

    if (appMode === 'Calculator') {
        appMode = 'Watch';
    } else {
        appMode = 'Calculator';
    }

    clearAll();
    timeDisplayOnOff.classList.toggle('off');
    timeDisplayOnOff.classList.toggle('on');

    calculatorDisplayOnOff.classList.toggle('off');   
    calculatorDisplayOnOff.classList.toggle('on');
}

let lightsOutStatus = false;

function lightsOut () {

    if (lightsOutStatus === false) {
        lightsOutStatus = true;
    } else {
        lightsOutStatus = false;
    }


    const bodyElement = document.querySelector('.body');
    
    const allElementsDark = document.querySelectorAll('.lights-out');
    allElementsDark.forEach( element => {
        element.classList.toggle('lights-out-on');
    });

    bodyElement.classList.toggle('lights-off');

    const tri1 = document.querySelector('.tri-1');
    const tri2 = document.querySelector('.tri-2');

    tri1.classList.toggle('tri1-lights-out-on');
    tri2.classList.toggle('tri2-lights-out-on');

    const displayScreen = document.querySelector('.display-div');
    displayScreen.classList.toggle('dark-screen');

    const displayOuterDiv = document.querySelector('.display-outer-div');
    displayOuterDiv.classList.toggle('display-outer-div-lightsout')
    const keyboard = document.querySelector('.keyboard');
    keyboard.classList.toggle('keyboard-lightsout');
    modeBtn.classList.toggle('mode-btn-lightsout');
}

function replaceTitle (msg) {

    const title = document.querySelector('h1');
    if(title.textContent === 'Calculator Watch') {
        title.textContent = msg;
    } else {
        title.textContent = "Calculator Watch";
    }
}

function toggleDarkModeIcon () {

    const sunMoon = document.querySelector('.sun-moon');
    if (sunMoon.textContent === '🌞') {
        sunMoon.textContent = '🌚';
    } else {
        sunMoon.textContent = '🌞';
    }

}



function turnOff () {
    
    replaceTitle("Press the light button");
    toggleDarkModeIcon();
    lightsOut();
}


const sunMoon = document.querySelector('.sun-moon');

sunMoon.addEventListener('click', turnOff);



/////////// light BTN ////////////////////////

const lightBtn = document.querySelector('.light');
const triTwo = document.querySelector('.tri-2');

lightBtn.addEventListener('click', pressLightBtn);
triTwo.addEventListener('click', pressLightBtn);

function pressLightBtn () {

    const displayScreen = document.querySelector('.display-div');
    displayScreen.classList.toggle('backlight');
    triTwo.classList.toggle('tri-2-pressed');

    lightBtn.classList.toggle('light-pressed');
}

function playBeep() {
    const sound = document.querySelector('.audio-beep');
    sound.currentTime = 0;
    sound.play();
}

/////////////////////////// ERROR DISPLAY ////////////////////////
/////////////////////////////////////////////////////////////////

function alarmLight () {

    const displayScreen = document.querySelector('.display-div');
    const calculatorDisplay = document.querySelector('.calculator-display');
    displayScreen.classList.toggle('backlight-red');
    calculatorDisplay.classList.toggle('backlight-red');

}

function errorAlarm () {

    if(lightsOutStatus === true) {
        lightsOut();
    }
    if(appMode === 'Calculator') {
        modeSwitch();
    }

    const alarms = document.querySelectorAll('.audio-alarm');
  
    const random = Math.floor(Math.random() * 6); //random number from 0 to 5
  
    alarms[random].play(); // plays Thief error files

    const bodyElement = document.querySelector('.body');

    const dateDisplay = document.querySelector('.date');
    dateDisplay.textContent = 'ERROR!';

    alarmLight();
    
    // on();

    replaceTitle('');

    const title = document.querySelector('h1');
    const emoji = document.querySelector('.sun-moon');
    emoji.remove();

    setInterval(() => {
        title.textContent += 'ERROR! '; 
        timeDisplay.textContent = 'ERROR!';
    }, 100);

    setTimeout(() =>{
        bodyElement.style['background-color'] = 'red';
    }, 100);

    setTimeout( () => {
        bodyElement.style['background-color'] = 'black';
        bodyElement.style['transition'] = '5s';        
    }, 5000);

    setTimeout(()=>{
        document.location.reload();
    },10000);
    
}


window.addEventListener('keydown', (e) => {

    const keyToPress = document.querySelector(`button[data-key="${e.keyCode}"]`);
    console.log(e.keyCode);

    if(keyToPress == null) return;
    
    keyToPress.classList.add('btn-active');

    if(keyToPress.classList.contains('btn-top')) {
        keyToPress.classList.add('btn-top-active');
    }

    playBeep();

    selectFunctionForKeyPress(e.keyCode);

  });

  window.addEventListener('keyup', (e) => {
    
    const keyToPress = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(keyToPress == null) return;
    keyToPress.classList.remove('btn-active');
    keyToPress.classList.remove('btn-top-active');
  });
  


function selectFunctionForKeyPress(key) {

  switch (key) {
 case 27:
    clearAll();
    break;
 case 46: 
    clear();
    break;
 case 8:
    backspace();
    break;
 case 9:
    switchSign();
    break;
 case 103:
 btnNumberPress(7);
    break;
 case 104:
    btnNumberPress(8); 
    break;
 case 105:
    btnNumberPress(9);
    break;
 case 111:
    pressOperator('division');
    break;
 case 100:
    btnNumberPress(4);
    break;
 case 101:
    btnNumberPress(5);
    break;
 case 102:
    btnNumberPress(6);
    break;
 case 106:
    pressOperator('multiplication');
    break;
 case 97:
    btnNumberPress(1);
    break;
 case 98:
    btnNumberPress(2);
    break;
 case 99:
    btnNumberPress(3);
    break;
 case 109:
    pressOperator('subtraction');
    break;
 case 194:
     insertDot(); 
    break;
 case 96:
    btnNumberZero();
    break;
 case 13:
    pressEquals();
 case 107:
    pressOperator('addition');
    break;
    default:
        console.log("problem choosing function");
    break;
  }
}