// Andrew Larkins
// 01/14/21
// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req, res) {
  const email = req.body.email;
  console.log(email);

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  }
  const jsonData = JSON.stringify(data);

  const url = "https://us7.api.mailchimp.com/3.0/lists/702e8892d3";

  const options = {
    method: "POST",
    auth: "alarks:aaf249bc1ac02f946a94ba41a7cf54c4-us7"
  }
  const request =  https.request(url, options, function(response) {
    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res) {
   res.redirect("/");
});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000...");
});




// API key
// aaf249bc1ac02f946a94ba41a7cf54c4-us7

// List Id
// 702e8892d3
