var express = require('express');
var app = express();

// '/' --> "hi there"
app.get("/", function(request, response) {
	response.send('Hi there, this is the root page');
	console.log("Someone made a get request to app.js root");
});

// '/bye' --> 'goodbye'
app.get("/bye", function(req, res) {
	res.send("Goodbye!!");
});

// '/dog' --> 'woof'
app.get("/dog", function(req, res) {
	res.send("WOOF!!!");
});

//subreddit
app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;	
	res.send("welcome to the "+ subreddit + " subreddit");
});

//subreddit page with comments
app.get("/r/:subreddit/comments/:id/:title", function(req, res) {
	console.log(req.params);
	res.send("welcome to the subreddit comments page!");
});

//wildcard
app.get("/*", function (req, res) {
	res.send("You are a star!");
});

// tell express to listen for requests (start server)
app.listen(3000, function() {
	console.log("app running on port:3000");
});
