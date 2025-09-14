const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the number : "));

if (a < 0)
{
    console.log(`${a} is a negative number`);
}
else if (a > 0)
{
    console.log(`${a} is a positive number`);
}
else if(a == 0)
{
    console.log(`${a} is a zero number`);
}