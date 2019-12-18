const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

const app = express();
// App port
const port = 3000;

// Express setup
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.static("views"));
app.use(expressSanitizer());
app.use(methodOverride('_method'))

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

app.get("/blogs/new", (request, response) =>
{   
    response.render("new/new");
});

app.get("/blogs/:id", (request, response) =>
{   
    Blog.findById(request.params.id, (error, foundBlog) =>
    {
        if(error)
        {
            response.redirect("/blogs");
        }
        else
        {
            response.render("show/show", {blog: foundBlog});
        }
    });
});

app.get("/blogs/:id/edit", (request, response) =>
{
    Blog.findById(request.params.id, (error, foundBlog) =>
    {
        if(error)
        {
            response.redirect("/blogs");
        }
        else
        {
            response.render("edit/edit", {blog: foundBlog});
        }
    });
});

// --- PUT ---
app.put( "/blogs/:id", (request, response) =>
{
    // Sanitize the body to remove any harmful scripts
    request.body.Blog.body = request.sanitize(request.body.Blog.body);

    Blog.findByIdAndUpdate(
        request.params.id,
        request.body.blog,
        (error, updatedBlog) =>
        {
            if(error)
            {
                response.redirect("/blogs");
            }
            else
            {
                response.redirect("/blogs/" + request.params.id);
            }
        }
    );
});

// --- POST ---
app.post("/blogs", (request, response) =>
{
    // Sanitize the body to remove any harmful scripts
    request.body.Blog.body = request.sanitize(request.body.Blog.body);

    Blog.create(
        request.body.blog,
        (error, newBlog) =>
        {
            if(error)
            {
                console.log("Unable to create new blog");
                response.render("new/new");
            }
            else
            {
                console.log("Created new blog");
                response.redirect("/blogs");
            }
        }
    );
});

// --- DELETE ---
app.delete("/blogs/:id", (request, response) =>
{
    Blog.findByIdAndRemove(
        request.params.id,
        request.body.blog,
        (error) =>
        {
            if(error)
            {
                response.redirect("/blogs");
            }
            else
            {
                response.redirect("/blogs");
            }
        }
    );
});

// Start the app
app.listen(port, () => console.log(`BlogApp listening on port ${port}!`));
