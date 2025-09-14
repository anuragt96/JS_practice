const prompt = require("prompt-sync")();


let ch = prompt("Enter a character: ").toLowerCase();

if (ch.length !== 1 || !/[a-z]/.test(ch)) 
{
    console.log("Please enter a single alphabet character.");
} 
else 
{
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") 
    {
        console.log(ch, "is a Vowel");
    } 
    else 
    {
        console.log(ch, "is a Consonant");
    }
}