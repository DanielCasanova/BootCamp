const express = require('express');
const requestPromise = require('request-promise-native');

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (request, response) => 
{   
    response.render("search");
});

app.get("/results", (request, response) =>
{
    const query = request.query.search;
    const url = `http://omdbapi.com/?s=${query}=&apikey=thewdb`;

    requestPromise(url)
        .then((body) => 
        {
            const data = JSON.parse(body);
            response.render("results", {data: data});
        })
        .catch((error) => 
        {

        });
});

app.listen(port, () => console.log(`Movie app listening on port ${port}!`));
