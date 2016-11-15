var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat-app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add new cat to db
//
//var george = new Cat ({
//  name: "George",
//  age: 11,
//  temperament: "Grouchy"
//});

//george.save(function(err, cat) {
//
//  if(err) {
//    console.log("something went wrong");
//  } else {
//    console.log("we just saved a cat to the db");
//    console.log(cat);
//  } 
//});


Cat.create({
  name: "Snow White",
  age: 7,
  temperament: "Very Sleepy"
}, function(err, cat){
  if(err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

//retrieve all cats from db and console.log each one
Cat.find({}, function(err, cats){
  if(err){
    console.log("There was an error");
    console.log(err);
  } else {
    console.log("Here are all of the cats: ")
    console.log(cats);
  }
});
