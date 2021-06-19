//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>hello</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me by email.");
});

app.get("/about", function(req, res) {
  res.send("I am Andrew, I play guitar and program.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");

});
