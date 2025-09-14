const prompt = require('prompt-sync')();

let a = prompt("Enter the name of a person : ");
let b = Number(prompt(`${a} please enter your age : `));


if (b >= 18 && b<=120)
{
    console.log(`${a} is eligible for vote`);
}
else  
{
    console.log(`${a} is not eligible for vote`);
}