let a = 5;

for (let i = 0; i < a; i++) 
{
    let pattern = "";
    for (let index = 0; index < i; index++) 
    {
        pattern = pattern + "* ";    
    }
    console.log(pattern);
}