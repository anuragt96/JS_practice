const prompt = require('prompt-sync')();

let a = prompt("Enter the password : ");
let b = prompt("Enter the password again : ");

if (a === b)
{
    console.log("Password is matched");
}
else 
    console.log("Password not matched");