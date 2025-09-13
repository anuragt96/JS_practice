const prompt = require('prompt-sync')();


let no1 = prompt("Enter the first number : ");
let no2 = prompt("Enter the second number : ");

let sum = Number(no1) + Number(no2);

console.log(`The sum of 2 numbers are ${no1} and ${no2} : ` + sum);


