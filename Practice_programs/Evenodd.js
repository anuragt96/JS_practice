const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the number : "));


if(a < 0)
{
    console.log("Number is negative. Please enter a number again");
}
else (a > 0)
{
    if(a % 2 == 0)
    {
        console.log("Number is even");
    }
    else
    {
        console.log("Number is odd");
    }
}


