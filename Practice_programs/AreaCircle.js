const prompt = require('prompt-sync')();

let radius = Number(prompt("Enter the radius : "));

let pi = 3.14;

 let area = pi * radius ** 2;

console.log(`Area of a circle is : ${area.toFixed(5)}m\u00B2`);
