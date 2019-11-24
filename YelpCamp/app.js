const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');

const app = express();

// App port
const port = 3000;

// MongoDB properties (without mongoose)
// Connection URL
const url = 'mongodb://localhost:27017/yelp_camp';
// Database Name nad client
const dbName = 'yelp_camp';

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
// Model - model variables use capitalized letters to start.
const Campground = mongoose.model("Campground", campgroundSchema);

// Sample create code
/*Campground.create(
    {
        name: "Man Camp",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f760310385307.560e411f58c2c.jpeg"
    },
    (error, element) =>
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("Created campground");
            console.log(element);
        }
    }
)*/

//***/
// Get routes
app.get("/", (request, response) =>
{
    response.render("landing/landing");
});

app.get("/campgrounds", (request, response) =>
{
    // Mongoose
    /*Campground.find(
        {},
        (error, allCampgrounds) =>
        {
            if(error)
            {
                console.log(error);
            }
            else
            {
                response.render("campgrounds/campgrounds", {campgroundsData:allCampgrounds});
            }
        }
    );*/

    // MongoDB
    mongoClient.connect(url, (err, client) =>
    {
        assert.equal(null, err);
        console.log("Connected successfully to server using MongoDB only!");
       
        const db = client.db(dbName);

        const collection = db.collection('campgrounds');
        // Find some documents
        collection.find({}).toArray((err, allCampgrounds) =>
         {
            assert.equal(err, null);
            
            response.render("campgrounds/campgrounds", {campgroundsData:allCampgrounds});
        });
       
        client.close();
    });
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
    
    // Mongoose
    /*Campground.create(
        obj,
        (error, element) =>
        {
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("Created campground");
                console.log(element);
                response.redirect("/");
            }
        }
    );*/

    //MongoDB
    mongoClient.connect(url, (err, client) =>
    {
        assert.equal(null, err);
        console.log("Connected successfully to server using MongoDB only!");
       
        const db = client.db(dbName);

        const collection = db.collection('campgrounds');
        // Find some documents
        collection.insertOne(
            obj, 
            (err, result) => 
            {
                assert.equal(err, null);

                console.log("Inserted object to database");
            }
        );
       
        client.close();
        // This redirect probably shouldn't be here
        response.redirect("/");
    });
});

// Start the app
app.listen(port, () => console.log(`YelpCamp listening on port ${port}!`));



/** TEMP DATA 
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
 */