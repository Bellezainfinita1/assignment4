console.log("Starting program");

let num1, num2, operation;

do {
  // COLLECT FIRST NUMBER FROM USER
  num1 = prompt("Enter first number:");
  num1 = Number(num1);

  // COLLECT SECOND NUMBER FROM USER
  num2 = prompt("Enter second number:");
  num2 = Number(num2);

  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  operation = prompt("Enter operation (+,-,*,/):");

  // CHECK TO SEE WHAT OPERATION THEY'RE USING
  switch(operation) {
    case '+':
      console.log(calculator.add(num1, num2));
      break;
    case '-':
      console.log(calculator.subtract(num1, num2));
      break;
    case '*':
      console.log(calculator.multiply(num1, num2));
      break;
    case '/':
      console.log(calculator.divide(num1, num2));
      break;
    default:
      console.log("Invalid operation. Please try again.");
  }

} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

console.log("End of program");