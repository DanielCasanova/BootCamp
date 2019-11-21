const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');

const app = express();

// App port
const port = 3000;

// MongoDB properties (without mongoose)
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';
// Use connect method to connect to the server
mongoClient.connect(url, function(err, client) 
{
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   
    client.close();
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.static("views"));

// MongoDB with mongoose
// Options
const mongooseOptions =
{
    useNewUrlParser: true,
    useUnifiedTopology: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}
// Connection
mongoose.connect("mongodb://localhost/yelp_camp", mongooseOptions);
// Schema
const campgroundSchema = new mongoose.Schema(
    {
        name: String,
        image: String
    }
);

/** TEMP DATA */
let campgroundsData = [
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
    },
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
    },
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
/** */

//***/
// Get routes
app.get("/", (request, response) =>
{
    response.render("landing/landing");
});

app.get("/campgrounds", (request, response) =>
{
    response.render("campgrounds/campgrounds", {campgroundsData:campgroundsData});
});

app.get("/campgrounds/new", (request, response) =>
{
    response.render("new/new");
});

//***/
// Post routes
app.post("/campgrounds", (request, response) =>
{
    const name = request.body.name;
    const image = request.body.image;

    let obj = {name: name, image, image};
    campgroundsData.push(obj);

    response.redirect("/");
});

// Start the app
app.listen(port, () => console.log(`YelpCamp listening on port ${port}!`));