const prompt = require('prompt-sync')();

let a = Number(prompt("Enter the number in array : "));

let arr = [];

for (let i = 0; i < a ; i++)
{
    let value = Number(prompt("Enter the number you want to put in array : "));
    arr.push(value);
}

//printing the array
for (let j = 0; j < arr.length ; j++)
{
    console.log(`'${arr[j]}'`);   
}

