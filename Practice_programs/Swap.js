const prompt = require('prompt-sync')();


let a = Number(prompt("Enter the first number : "));
let b = Number(prompt("Enter the second number : "));

    console.log("The Value of a and b before swap");
    console.log("a : " + a);
    console.log("b : " + b);

    a = a + b ;
    b = a-b;
    a = a-b;

    console.log("The Value of a and b after swap");
    console.log("a : " + a);
    console.log("b : " + b);    