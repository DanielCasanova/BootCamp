var testArray1 = [1,2,3,4,5];
var testArray2 = [1,1,1,1];
var testArray3 = [1,52,30,25,99,10];

printReverse(testArray1);
isUniform(testArray1);
isUniform(testArray2);
sumArray(testArray1);
max(testArray3);

function printReverse (arr)
{
    for (var i=arr.length-1; i>=0; i--)
    {
        console.log(arr[i]);
    }
}

function isUniform (arr)
{
    var allSame = true;

    for (i=1; i<arr.length; i++)
    {
        if(arr[i-1] !== arr[i])
        {
            allSame = false;
            break;
        }
    }

    console.log (allSame);
}


function sumArray(arr)
{
    var sum = sumArrayHelper(arr);

    console.log(sum);
}

function sumArrayHelper (arr)
{
    if (arr.length == 0)
    {
        return 0;
    }
    else
    {
        var num = arr.shift();

        return num + sumArrayHelper(arr);
    }
}

function max (arr)
{
    var max = Number.MIN_VALUE;

    arr.forEach (function(element)
    {
        if(element>max)
        {
            max = element
        }
    }
    );

    console.log(max);
}
