function isEven(num)
{
    if(num % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function factorial(num)
{
    var fact = 1;

    while(num > 0)
    {
        fact *= num;
    }

    return fact;
}

function kebabToSnake(str)
{
    return str.replace(/_/g, "-");
}
