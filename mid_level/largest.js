const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the first number : "));
let b = Number(prompt("Enter the second number : "));


if (a > b)
{
    console.log(`${a} is greater than ${b}`);
}
else     console.log(`${b} is greater than ${a}`);