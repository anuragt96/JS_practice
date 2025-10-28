let arr = [2,4,6,2,5,3,3,4];
let newarr = [];

for (let index = 0; index < arr.length; index++) 
{
    if(!newarr.includes(arr[index]))
    newarr.push(arr[index]);    
}

console.log(newarr);
