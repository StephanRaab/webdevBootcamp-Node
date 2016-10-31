var express = require ('express');
var app = express();
 
app.get("/", function(req, res){
	//res.render("name of file goes here")
	res.render("home.ejs");
})

app.get("/thingsilove/:thing", function(req, res){
	var thing = req.params.thing;

	//thingVar is the variable inside of the love.ejs file
	res.render("love.ejs", {thingVar: thing});
})

app.listen(3000, function(){
	console.log("App running on localhost:3000");
});
