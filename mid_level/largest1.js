const prompt = require('prompt-sync')();

let a = Number(prompt("Enter the first number : "));
let b = Number(prompt("Enter the second number : "));
let c = Number(prompt("Enter the third number : "));


if (a > b && a > c)
{
    console.log(`${a} is greater than ${b} & ${c}`);
}
else if(b > a && b > c)
{
    console.log(`${b} is greater than ${a} & ${c}`);
}
else console.log(`${c} is greater than ${a} & ${b}`);