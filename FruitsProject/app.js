//jshint esversion:6

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const apple = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Keeps doctor away."
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "pretty great"
});
const orange = new Fruit({
  name:"orange",
  rating:9,
  review: "makes good juice"
});
const banana = new Fruit({
  name:"Banana",
  score:"9",
  review:"good energy"
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Saved all fruits to fruits db");
//   }
// });
//fruit.save();

Fruit.find(function(err, fruits) {
  if(err) {
    console.log(err);
  } else {
    //console.log(fruits);
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
});


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Andrew",
  age: 27
});
//person.save();


// or wo mongoose
// const url = 'mongodb://localhost:27017';
// const dbName = 'fruitsDB';
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   // insertDocuments(db, function() {
//   //   client.close();
//   // });
//   findDocuments(db, function() {
//     client.close();
//   });
// });

// const insertDocuments = function(db, callback) {
//   const collection = db.collection('fruits');
//   collection.insertMany([
//     {name: "Apple",
//     score: 9,
//     review: "Keeps doctor away"},
//     {name: "Kiwi",
//     score: 9,
//     review: "Pretty Great"},
//     {name: "Strawberry",
//     score: 10,
//     review: "One of my favs"}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

const findDocuments = function(db, callback) {
  const collection = db.collection('fruits');
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  })
};
