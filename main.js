
let currentInput = '0';
let memoryValue = null;
let currentOperation = null;

function updateScreen() {
    document.getElementById('screen').textContent = currentInput;
}

function clearScreen() {
    currentInput = '0';
    currentOperation = null;
    updateScreen();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateScreen();
}

function appendNumber(number) {
    if (currentInput === '0' || currentOperation === '=') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateScreen();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function setOperation(operation) {
    if (currentOperation !== null && currentInput !== '0') {
        calculate();
    }
    currentOperation = operation;
    if (currentInput !== '0') {
        memoryValue = parseFloat(currentInput);
    }
    currentInput = '0';
}

function calculate() {
    const num2 = parseFloat(currentInput);
    switch (currentOperation) {
        case '+':
            currentInput = (memoryValue + num2).toString();
            break;
        case '-':
            currentInput = (memoryValue - num2).toString();
            break;
        case '*':
            currentInput = (memoryValue * num2).toString();
            break;
        case '/':
            if (num2 !== 0) {
                currentInput = (memoryValue / num2).toString();
            } else {
                currentInput = 'Error';
            }
            break;
    }
    currentOperation = '=';
    memoryValue = null;
    updateScreen();
}

function memorySave() {
    memoryValue = parseFloat(currentInput);
    updateScreen();
}

function memoryRecall() {
    if (memoryValue !== null) {
        currentInput = memoryValue.toString();
        updateScreen();
    }
}
