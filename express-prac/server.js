//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>This is where the fun begins.</h1>")
});

app.get("/hobbies", function(req, res) {
  res.send("I like guitar and coding!");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
