// Function to append a value to the display
function appendToDisplay(value) {
    const input = document.getElementById('input');
    input.textContent += value;
}

// Function to clear the display
function clearDisplay() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    input.textContent = '';
    output.textContent = '';
}

// Function to calculate the result
function calculate() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    try {
        // Evaluate the expression in the input
        const result = eval(input.textContent);
        output.textContent = result;
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        output.textContent = 'Error';
    }
}

// Function to handle operator buttons
function handleOperator(operator) {
    const input = document.getElementById('input');
    const lastChar = input.textContent.slice(-1);

    // Prevent double operators
    if (['+', '-', '*', '/'].includes(lastChar)) {
        input.textContent = input.textContent.slice(0, -1) + operator;
    } else {
        input.textContent += operator;
    }
}

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        } else {
            appendToDisplay(value);
        }
    });
});