const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response) => response.send("Hi there!"));

app.get('/bye', (request, response) => response.send("Buh-Bye!"));

app.get('/dog', (request, response) => 
{
    console.log("Request made to dog");
    response.send("Woof!")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));