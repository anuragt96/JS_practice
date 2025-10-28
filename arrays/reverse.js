let arr = [1,3,4,6,7,8,9];
let j,r;
let reverse = [];

//printing the array
for (j = arr.length-1; j >= 0 ; j--)
{
    reverse.push(arr[j]);
}

//printing the array
for (r = 0; r< reverse.length ; r++)
{
    console.log(reverse[r]);   
}

