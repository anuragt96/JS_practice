let arr = [1,3,4,6,7,8,9];
let largest = 0;

largest = arr[0];
//printing the array
for (let j = 0; j < arr.length ; j++)
{
    if(arr[j] > largest)
        {
            largest = arr[j];
        }   
}
console.log('The largest value of an array is : ' + largest);

