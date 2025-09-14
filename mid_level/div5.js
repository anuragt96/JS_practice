const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the number : "));

if ( a % 5 == 0)
{
    console.log("Number is divisible by 5");
}
else if (a % 11 == 0)
{
    console.log("Number is divisible by 11 ");
}
else 
    console.log("Number is divisible by another number \n");