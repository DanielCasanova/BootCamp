const express = require("express");
const mongoose = require("mongoose");
const app = express();
// App port
const port = 3000;

// Express setup
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
mongoose.connect("mongodb://localhost:27017/restful_blog_app", mongooseOptions);
// Schema
const blogSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        body: String,
        created: {type: Date, default: Date.now}
    }
);
// Model - model variables use capitalized letters to start.
const Blog = mongoose.model("Blog", blogSchema);

// New blog entry -> helper
/*Blog.create(
    {
        title: "Ferrari F1",
        image: "https://images.unsplash.com/photo-1574781632351-560de23e0904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        body: "Ferrari F1 Pits"
    }
);*/

// --- Routes ---
// --- GET ---
app.get("/", (request, response) => 
{
    response.redirect("/blogs");
});

app.get("/blogs", (request, response) => 
{
    Blog.find(
    {},
    (error, allBlogs) =>
        {
            if(error)
            {
                console.log(error);
            }
            else
            {
                response.render("index", {blogs: allBlogs});
            }
        }
    );
});

// --- PUT ---

// --- POST ---

// Start the app
app.listen(port, () => console.log(`BlogApp listening on port ${port}!`));
