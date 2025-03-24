function evenOdd(fun,num1)
{
   if (fun==even)
   {
    return even(num1);
   }
   else if (fun==odd)
   {
    return odd(num1);
   }
   else{
    return "enter valid";
   }
}
function even(num)
{
    if (num%2==0)
    {
        return "even Number"
    }
    else{
        return "odd number"
    }
}
function odd(num)
{
    if(num%2!=0)
    {
        return "odd number";
    }
    else{
        return "even number";
    }
}
console.log(evenOdd(even,5));
