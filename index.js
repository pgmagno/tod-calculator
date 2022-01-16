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
const btnSign = document.querySelector('.btn-sign');

btn1.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 1;
        return;
    }
    displayDiv.value += 1;
});

btn2.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 2;
        return;
    }
    displayDiv.value += 2;
});

btn3.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 3;
        return;
    }
    displayDiv.value += 3;
});

btn4.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 4;
        return;
    }
    displayDiv.value += 4;
});

btn5.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 5;
        return;
    }
    displayDiv.value += 5;
});

btn6.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 6;
        return;
    }
    displayDiv.value += 6;
});

btn7.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }    
    if (displayDiv.value === '0') {
        displayDiv.value = 7;
        return;
    }
    displayDiv.value += 7;
});

btn8.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 8;
        return;
    }

   displayDiv.value += 8;
});

btn9.addEventListener('click', () => {
    if(operationActive) {
        clear();
    }
    if (displayDiv.value === '0') {
        displayDiv.value = 9;
        return;
    }  
    displayDiv.value += 9;
});

btn0.addEventListener('click', () => {    
    if(operationActive) {
        clear();
    }


    if (displayDiv.value !== '0' || displayDiv.value === '0.') {
        displayDiv.value += 0;
    }
    
});

btnSign.addEventListener('click', () => {
    displayDiv.value *= -1;
});


/////////////////// clear display //////////

const btnClear = document.querySelector('.btn-clear-all');
btnClear.addEventListener('click', clearAll);

const btnClearEntry = document.querySelector('.btn-clear-entry');
btnClearEntry.addEventListener('click', clear);

function clear() {
    displayDiv.value = 0;
    operationActive = false;
};

function clearAll() {
    displayDiv.value = 0;
    operationActive = false;
    result[0] = 0;
    secondOperand = 0;
};

const btnBackspace = document.querySelector('.btn-backspace');
btnBackspace.addEventListener('click', () => {
    displayDiv.value = parseInt(displayDiv.value / 10);
});

//////////// FLOAT PARSER //////////////////////

const btnDot = document.querySelector('.btn-dot');
btnDot.addEventListener('click', () => {
    
    if(displayDiv.value.indexOf(".") === -1) {
        displayDiv.value += '.';
    }
});

////////////// Event Listeners Operations ////////////

const btnAdd = document.querySelector('.btn-addition');
const btnSub = document.querySelector('.btn-subtraction');
const btnMult = document.querySelector('.btn-multiplication');
const btnDivide = document.querySelector('.btn-division');
const btnEquals = document.querySelector('.btn-equals');

let secondOperand = 0;
let operationActive = false;
const result = [];
let operator = 'none';



btnEquals.addEventListener('click', () => {

    if(operator === 'none') {
        return;
    } else {
        result[0] = operate(result[0], displayDiv.value, operator);    
        clear();
        displayDiv.value = result[0];
        operationActive = true;
        operator = 'none';
        secondOperand = 0;
    }    
});

////////// operations ////////////

btnAdd.addEventListener('click', () => {

    if (secondOperand == 0) {
        result[0] = displayDiv.value;
        secondOperand = 1;
        operator = 'addition';
    } else {
        result[0] = operate(result[0], displayDiv.value, operator);
        displayDiv.value = result[0];
        operator = 'addition';       
    }

    operationActive = true;
});

btnSub.addEventListener('click', () => {

    if (secondOperand == 0) {
        result[0] = displayDiv.value;
        secondOperand = 1;
        operator = 'subtraction';
    } else {
        result[0] = operate(result[0], displayDiv.value, operator);
        displayDiv.value = result[0]; 
        operator = 'subtraction';
    }

    operationActive = true;
});

btnMult.addEventListener('click', () => {

    if (secondOperand == 0) {
        result[0] = displayDiv.value;        
        secondOperand = 1;
        operator = 'multiplication';
    } else {
        result[0] = operate(result[0], displayDiv.value, operator);
        displayDiv.value = result[0];
        operator = 'multiplication';
    }

    operationActive = true;
});

btnDivide.addEventListener('click', () => {

    if (secondOperand == 0) {
        result[0] = displayDiv.value;        
        secondOperand = 1;
        operator = 'division';    
    } else {
        result[0] = operate(result[0], displayDiv.value, operator);
        displayDiv.value = result[0];        
        operator = 'division';
    }
    operationActive = true;
});


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


modeBtn.addEventListener('click', () => {
    // toggles would be dependent on CSS order of statements, best to 
    // do it manually

    clearAll();
    timeDisplayOnOff.classList.toggle('off');
    timeDisplayOnOff.classList.toggle('on');

    calculatorDisplayOnOff.classList.toggle('off');   
    calculatorDisplayOnOff.classList.toggle('on');
});

function lightsOut () {
    const bodyElement = document.querySelector('.body');
    const displayScreen = document.querySelector('.display-div');
    const watchBackShadow = document.querySelector('.watch-div');

    bodyElement.classList.toggle('lights-off');
    displayScreen.classList.toggle('dark-screen');
    watchBackShadow.classList.toggle('no-shadow');
}

function replaceTitle (msg) {

    const title = document.querySelector('h1');
    if(title.textContent === 'Paulo\'s Calculator Watch') {
        title.textContent = msg;
    } else {
        title.textContent = "Paulo's Calculator Watch";
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
    
    replaceTitle("It\'s hard to see. Press the light button");
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



window.addEventListener('click', function (e) {
    if(e.target.classList.value.indexOf('btn') !== -1) {
        const sound = document.querySelector('.audio-beep');
        sound.currentTime = 0;
        sound.play();
    }


});


function alarmLight () {

    const displayScreen = document.querySelector('.display-div');
    const calculatorDisplay = document.querySelector('.calculator-display');
    displayScreen.classList.toggle('backlight-red');
    calculatorDisplay.classList.toggle('backlight-red');

}


function errorAlarm () {
    const alarms = document.querySelectorAll('.audio-alarm');
  
    const random = Math.floor(Math.random() * 6); //random number from 0 to 5
  
    alarms[random].play(); // plays Thief error files

    const bodyElement = document.querySelector('.body');

    const dateDisplay = document.querySelector('.date');
    dateDisplay.textContent = 'ERROR!';

    alarmLight();
    
    on();

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


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }



  window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
  });