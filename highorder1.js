function greet (fun,n)
{
    for (let i =1;i<=n;i++)
    {
        console.log(fun);
    }
}
function hello()
{
    return "hello";
}
greet(hello(),5);