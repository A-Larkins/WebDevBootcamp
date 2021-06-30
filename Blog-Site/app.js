//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const aboutContent = "Hello, I am Andrew and this is my blog!";
const contactContent = "Email: andrewrlarkins@gmail.com";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let blogPosts = [];

app.get("/", function(req, res) {
  res.render("home", {
    posts: blogPosts
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    aboutText: aboutContent
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    contactText: contactContent
  });
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  const blogPost = {
    title: req.body.txtTitle,
    content: req.body.txtCompose
  };
  blogPosts.push(blogPost);
  res.redirect("/");
});

app.get("/posts/:postTitle", function(req, res) {
  const reqTitle = _.lowerCase(req.params.postTitle);
  blogPosts.forEach(function(blogPost) {
    const blogTitle = _.lowerCase(blogPost.title);
    if (blogTitle === reqTitle) {
      res.render("post", {
        title: blogPost.title,
        content: blogPost.content
      });
    }
  });
});









// for home, display date with post
// <% let date = new Date (); %> %>
// <% let year = date.getFullYear();
// <% let month = (date.getMonth() + 1).toString().padStart(2, "0"); %>
// <% let day = date.getDate().toString().padStart(2, "0"); %>
// <% let time = month + "/" + day + "/" + year; %>
// <p> <%- time -%> </p>



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
