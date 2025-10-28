let arr = [1,3,4,6,7,8,9];
let smallest = 0;

smallest = arr[0];
//printing the array
for (let j = 0; j < arr.length ; j++)
{
    if(arr[j] < smallest)
        {
            smallest = arr[j];
        }   
}
console.log('The smallest value of an array is : ' + smallest);

