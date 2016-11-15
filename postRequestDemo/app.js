var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
})

var friends = ["Jared", "Hai", "YungDan", "Stumbino"];

app.get("/friends", function(req, res){
	res.render("friends", { friends: friends });
})

app.post("/addfriend", function(req, res){
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.listen(3000, function(){
	console.log("App listening on localhost:3000");
});
