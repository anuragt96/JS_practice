const prompt = require('prompt-sync')();

let arr = [2,4,6,7,8,9];
let flag = false;
let a = Number(prompt("Enter the number you want to search in array : "));


for (let i = 0 ; i< arr.length;i++)
{
    if (arr[i] === a)
    {
        flag = true;
    }
}
if (flag)
{
    console.log("number found");
    }
    else console.log("number not found");

