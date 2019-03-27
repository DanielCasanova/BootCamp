// Ex. 1
var printNum = -10;

while(printNum <= 19)
{
    console.log(printNum);
    printNum++;
}

// Ex. 2
var evenNum = 10;

while(evenNum <= 40)
{
    if(evenNum % 2 === 0)
    {
        console.log(evenNum);
    }

    evenNum++;
}

// Ex. 3
var oddNum = 300;

while(oddNum <= 333)
{
    if((oddNum - 1) % 2 === 0)
    {
        console.log(oddNum);
    }

    oddNum++;
}

// Ex. 4
var divNum = 5;

while(divNum <= 50)
{
    if((divNum % 5) === 0 && (divNum % 3) === 0 )
    {
        console.log(divNum);
    }

    divNum++;
}