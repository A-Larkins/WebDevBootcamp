//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Needs a name..."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const peach = new Fruit({
//   name: "Peach",
//   rating: 8,
//   review: "Peaches are good."
// });

//peach.save();

// const apple = new Fruit({
//   name: "Apple",
//   rating: 9,
//   review: "Keeps doctor away."
// });
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 9,
//   review: "pretty great"
// });
// const orange = new Fruit({
//   name:"Orange",
//   rating:9,
//   review: "makes good juice"
// });
// const banana = new Fruit({
//   name:"Banana",
//   score:"9",
//   review:"good energy"
// });

// Fruit.insertMany([apple, kiwi, orange, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Saved all fruits to fruits db");
//   }
// });

//fruit.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    //console.log(fruits);

    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

//update
// Fruit.updateOne({_id: "60e1b9da0c98b71179744930"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Updated the document...");
//   }
// });


// delete a fruit
// Fruit.deleteOne( {name: "Peach"}, function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log("Deleted the document...");
//   }
// });


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);
// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Pretty great"
// });
// pineapple.save();

const mango = new Fruit({
  name: "Mango",
  score: 8,
  review: "Yum"
});
mango.save();

Person.updateOne({name: "Andrew"}, {favoriteFruit: mango}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Updated the document...");
  }
});

// const person = new Person({
//   name: "Ally",
//   age: 27,
//   favoriteFruit: pineapple
// });
// person.save();

// delete many people
// Person.deleteMany({name:"Andrew"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted all Andrews...");
//   }
// });



// or wo mongoose

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

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

// const findDocuments = function(db, callback) {
//   const collection = db.collection('fruits');
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   })
// };
