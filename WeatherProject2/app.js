//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const zip = req.body.zipName;
  const apiKey = "9818aef2b3d301dd051c1bb434013fd7";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const nameOfZip = weatherData.name;
      var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The weather is currently: " + desc + ".</h1>");
      res.write("<h1>The temperature in "+ nameOfZip +" is " + temp + " degrees F.</h1>");
      res.write("<img src=" + iconURL + ">")
      res.send();
    })
  })
});



app.listen(3000, function() {
  console.log("Server running on port 3000.");
});
