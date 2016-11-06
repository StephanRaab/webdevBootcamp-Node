var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
})

app.get("/friends", function(req, res){
	var friends = ["Naruto", "Sasuke", "Itachi", "Kakashi", "Obito"];
	res.render("friends", { friends: friends });
})

app.post("/addfriend", function(req, res){
	res.send("You have reached the POST route");
});

app.listen(3000, function(){
	console.log("App listening on localhost:3000");
});
