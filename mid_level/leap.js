const prompt = require('prompt-sync')();

let a = Number(prompt("Enter the year : "));

if (a % 4 == 0)
{
    console.log(`${a} is a leap year`);
}
else console.log(`${a} is not a leap year`);
