function clearDisplay() {
    document.calc.display.value = "";
}

function deleteLast() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendNumber(number) {
    document.calc.display.value += number;
}

function appendOperator(operator) {
    const displayValue = document.calc.display.value;
    if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
        document.calc.display.value += operator;
    }
}

function calculateResult() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        alert("Invalid Expression");
    }
}
