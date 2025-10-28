const prompt = require('prompt-sync')();

let arr = [2,4,6,7,8,9];
let counter = 0, oddcounter = 0;

for (let i = 0 ; i< arr.length;i++)
{
    if (arr[i] % 2 == 0)
    {
        counter++;
    }
    else oddcounter++;
}

console.log("even numbers in array: " + counter);
console.log("odd numbers in array : " + oddcounter);
