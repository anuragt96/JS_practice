const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the first number : "));
let b = Number(prompt("Enter the second number : "));

let c;

    c = a;
    a = b;
    b = c;

console.log("value of a : " + a);
console.log("Value of b : " + b);


