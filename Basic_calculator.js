let a = 5 , b = 8;
console.log("----------------------");
console.log("Basic Calculation...");
console.log(`Addition of ${a} and ${b} is : ${a + b}`);
console.log(`Substraction of ${a} and ${b} is : ${a - b}`);
console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
console.log(
  b !== 0
    ? `Division of ${a} and ${b} is : ${a / b}`
    : "Division by zero is not allowed."
);
console.log(`Modulus of ${a} and ${b} is : ${a%b}`);