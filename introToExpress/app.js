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
})

// '/dog' --> 'woof'
app.get("/dog", function(req, res) {
	res.send("WOOF!!!");
})

// tell express to listen for requests (start server)
app.listen(3000, function() {
	console.log("app running on port:3000");
})
