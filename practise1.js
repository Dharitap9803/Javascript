// Accept 3 numbers from the user using Prompt ,find the greater of these numbers and do the sum of that numbers which are greater than 40 .


let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));
let number3 = Number(prompt("Enter third number:"));

let greatest = Math.max(number1, number2, num3);

let sum = 0;
if (num1 > 40) sum += num1;
if (num2 > 40) sum += num2;
if (num3 > 40) sum += num3;

console.log("Greatest number is:", greatest);
console.log("Sum of numbers greater than 40 is:", sum);