let l = 100;
let i, sum = 0;
for(i = 1 ; i<= l ; i++)
{
    if(i % 2 == 0)
    {
        sum = sum + i ;       
    }
    console.log(`The sum of even no's in 1 to 100 are :  ${sum}`);
}