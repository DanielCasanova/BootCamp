const express = require('express');

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (request, response) =>
{
    response.render("landing");
});

app.get("/campgrounds", (request, response) =>
{
    campgroundsData = [
    {
        name: "Man Camp",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f760310385307.560e411f58c2c.jpeg"
    },
    {
        name: "Fire pit",
        image: "https://live.staticflickr.com/1794/30134174508_441a386a5e_b.jpg"
    },
    {
        name: "Lake bedrock",
        image: "https://live.staticflickr.com/2804/4297513549_294bea98ec_b.jpg"
    }];

    response.render("campgrounds", {campgroundsData:campgroundsData});
});

// Start the app
app.listen(port, () => console.log(`YelpCamp listening on port ${port}!`));