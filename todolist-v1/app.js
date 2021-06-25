// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  var today = new Date();
  var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var currentDay = daysOfWeek[ today.getDay() ];
  res.render("list", {
    day: currentDay
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
