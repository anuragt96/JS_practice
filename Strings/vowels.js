let str = "Automation";

let vowels = str.match(/[aeiouAEIOU]/g);
let count = vowels ? vowels.length : 0;

console.log(`Number of vowels in the word : ${count}`);
