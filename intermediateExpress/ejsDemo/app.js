var express = require ('express');
var app = express();

//this sets the public directory up css won't work otherwise
app.use(express.static('public'));

//view engine lets you leave off the .ejs
app.set("view engine", "ejs");

app.get("/", function(req, res){
	//res.render("name of file goes here")
	res.render("home");
})

app.get("/thingsilove/:thing", function(req, res){
	var thing = req.params.thing;

	//thingVar is the variable inside of the love.ejs file
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Intro",author: "b3l914n"},
		{title: "Space", author: "Michael Jordan"},
		{title: "Final post", author: "revelation"}
	];

	res.render("posts", {posts: posts});
})

app.get("/moreposts", function(req, res) {
	var posts = [
		{title: "Intro",author: "b3l914n"},
		{title: "Space", author: "Michael Jordan"},
		{title: "Final post", author: "revelation"},
		{title: "Allergy Medicine", author: "now"}
	];

	res.render("moreposts", {posts: posts});
})

app.listen(3000, function(){
	console.log("App running on localhost:3000");
});
