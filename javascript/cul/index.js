function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):");

    // Input validation
    if (isNaN(num1) || isNaN(num2) || !["+","-","*","/"].includes(operation)) {
        console.log("Invalid input. Please enter valid numbers and operation.");
        return;
    }

    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operation.");
            return;
    }

    console.log("Result: " + result);
}

calculator();
