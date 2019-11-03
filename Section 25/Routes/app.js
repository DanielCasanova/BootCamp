const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response) => response.send("Hi there, welcome to my assignment!"));

app.get('/speak/:animal', (request, response) => 
{
    switch(request.params.animal.toLowerCase())
    {
        case 'pig':
            response.send("The pig says oink!");
            break;
        case 'cow':
            response.send("The cow says moo!");
            break;
        case 'dog':
            response.send("The dog says woof!");
            break;
        case 'cat':
            response.send("The cat says meow!");
            break;
        default:
            response.send("Animal not found!");
    }    
});

app.get('/:echo/:num', (request, response) => 
{
    if(isNaN(request.params.num))
    {
        response.send("Not a number");
    }   
    else
    {
        let string = "";
        let num = request.params.num;

        while(num > 0)
        {
            string = string + request.params.echo + " ";
            num--;
        }

        response.send(string);
    }
});

app.get('/*', (request, response) => response.send("Oh darn, can't find that page"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));