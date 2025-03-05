const display = document.getElementById('display');
let lastResult = 0;

function appendNumber(num) {
    if (display.value === 'Error') {
        clearDisplay();
    }
    // Handle decimal point
    if (num === '.' && display.value.includes('.')) {
        return;
    }
    display.value += num;
}

function appendOperator(operator) {
    if (display.value === 'Error') {
        clearDisplay();
    }
    // Allow minus sign for negative numbers at start
    if (display.value === '' && operator === '-') {
        display.value = operator;
        return;
    }
    if (display.value !== '') {
        const lastChar = display.value.slice(-1);
        if ('+-*/.%'.includes(lastChar)) {
            display.value = display.value.slice(0, -1) + operator;
        } else {
            display.value += operator;
        }
    }
}

function clearDisplay() {
    display.value = '';
    lastResult = 0;
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === '') return;
        
        // Replace % with /100 for percentage calculations
        let expression = display.value.replace(/%/g, '/100');
        
        // Handle special case where expression starts with a decimal point
        if (expression.startsWith('.')) {
            expression = '0' + expression;
        }
        
        const result = eval(expression);
        
        // Check if result is valid
        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        lastResult = result;
        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Numbers and decimal point
    if (/[\d.]/.test(key)) {
        appendNumber(key);
    }
    // Operators
    else if (['+', '-', '*', '/', '%'].includes(key)) {
        appendOperator(key);
    }
    // Enter or = for calculation
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    // Backspace for delete
    else if (key === 'Backspace') {
        deleteLastChar();
    }
    // Escape for clear
    else if (key === 'Escape') {
        clearDisplay();
    }
}); 