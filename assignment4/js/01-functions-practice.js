function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
  }
  
  function squareNumber(num) {
    const result = num ** 2;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
  }
  
  function percentOf(num1, num2) {
    const percentage = (num1 / num2) * 100;
    console.log(`${num1} is ${percentage}% of ${num2}.`);
    return percentage;
  }
  
  function findModulus(num1, num2) {
    const modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
  }