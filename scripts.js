const display = document.querySelector('.display');

let displayedValue = '';
let inMemoryValue = '';
let inMemorySign = '';


function updateDisplay() {
    display.innerHTML = displayedValue;
}

const oneButton = document.querySelector("#one");
oneButton.addEventListener('click', () => {
    displayedValue += '1';
    updateDisplay();
});

const twoButton = document.querySelector("#two");
twoButton.addEventListener('click', () => {
    displayedValue += '2';
    updateDisplay();
});

const threeButton = document.querySelector("#three");
threeButton.addEventListener('click', () => {
    displayedValue += '3';
    updateDisplay();
});

const fourButton = document.querySelector("#four");
fourButton.addEventListener('click', () => {
    displayedValue += '4';
    updateDisplay();
});

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener('click', () => {
    displayedValue += '5';
    updateDisplay();
});

const sixButton = document.querySelector("#six");
sixButton.addEventListener('click', () => {
    displayedValue += '6';
    updateDisplay();
});

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener('click', () => {
    displayedValue += '7';
    updateDisplay();
});

const eightButton = document.querySelector("#eight");
eightButton.addEventListener('click', () => {
    displayedValue += '8';
    updateDisplay();
});

const nineButton = document.querySelector("#nine");
nineButton.addEventListener('click', () => {
    displayedValue += '9';
    updateDisplay();
});

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener('click', () => {
    displayedValue += '0';
    updateDisplay();
});

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => {
    if(displayedValue != ''){                 // if no displayed it means we should use
        inMemoryValue = displayedValue;       // in memory value from last calculation
    }    
    displayedValue = '';
    inMemorySign = '+';
    updateDisplay();
    display.innerHTML = '0';
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    switch(inMemorySign) {
        case'+':
        let result = Number(inMemoryValue) + Number(displayedValue);
        inMemoryValue = result;
        displayedValue = '';
        display.innerHTML = result;
        console.log(result);
        inMemorySign = '';
    }
});