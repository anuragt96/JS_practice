const prompt = require("prompt-sync")();

let a = prompt("Enter the no for table : ");

// console.log(`Table of ${a} \n`);

for (let i = 1; i<=10 ;i++)
{    
    console.log( `${a} x ${i}` + " = " + a * i );
    
}