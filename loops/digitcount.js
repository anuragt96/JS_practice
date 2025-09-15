const prompt = require('prompt-sync')();

let counter = 0;

let a = Number(prompt("Enter the number : "));

if (isNaN(a))
{
    console.log("Please enter correct number");
}
else
{
    if (a === 0)
    {
        counter = 1;
    }
    else
    {
        while(a > 0)
        {
            a = Math.floor(a / 10);
            counter++;
        }
    }
    console.log("Total number of digits in a number is : " + counter);
}
