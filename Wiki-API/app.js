//jshint esverion: 6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

// all articles
app.route("/articles")

  .get(function(req, res) {
    Article.find(function(err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post(function(req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle
      .save(function(err) {
        if (!err) {
          res.send("Successfully added a new article to DB.")
        } else {
          res.send(err);
        }
      });
  })

  .delete(function(req, res) {
    Article.deleteMany(function(err) {
      if (!err) {
        res.send("Deleted all articles in DB.")
      } else {
        res.send(err);
      }
    })
  });

// specific articles
app.route("/articles/:articleTitle")

.get(function(req, res) {
  const articleTitle = req.params.articleTitle;
  Article.findOne({ title: articleTitle }, function(err, foundArticle) {
    if(foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No article with that title was found in DB....")
    }
  })
});








app.listen(3000, function() {
  console.log("Server running on port 3000...");
});
