const prompt = require("prompt-sync")();

let sum = 0;
let n = prompt("Enter the N natural number : ");

for (let i = 1; i <=n ; i++)
{
    sum = sum + i;
}
console.log("The sum is : " + sum);