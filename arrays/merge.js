const prompt = require('prompt-sync')();

let arr1 = [0,3,0];
let arr2 = [4,5,6];


//method 1
// console.log(arr1 + ',' + arr2);

//method 2
// arr1.push(...arr2);
// console.log( arr1);


//method 3
// const mergearr = [...arr1, ...arr2]
// console.log(mergearr);

//method 4
const m_arr = arr1.concat(...arr2);
console.log(m_arr);
