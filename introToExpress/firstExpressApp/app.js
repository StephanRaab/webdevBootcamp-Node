var express = require ('express');
var app = express();

//visiting "/" should print "Hi there, welcom to my assignment"
app.get("/", function(req, res){
	res.send('Hi there, welcome to my assignment');
});

//visiting "/speak/pig" should print "the pig says 'Oink'"
//visiting "/speak/cow" should print "the cow says 'Moo'"
//visiting "/speak/dog" should print "the dog says 'Woof'"
app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	var animalSound;

	if (req.params.animal = "pig"){
		animalSound = 'Oink';
	} else if (req.params.animal = "cow"){
		animalSound = "Moo";
	} else {
		animalSound = "Woof";
	}

	res.send("The "+ animal + " says " + animalSound);
})

//visiting "/repeat/hello/3" should print out "hello hello hello"
//visiting "/repeat/hello/5" should print out "hello hello hello hello hello"
//visiting "/repeat/blah/2" should print out "blah blah"
app.get("/repeat/:repeatWord/:repeatAmount", function(req, res){
	function runCommand() {
		var repeatWord = req.params.repeatWord;
		var repeatAmount = parseInt(req.params.repeatAmount);

		for (var i = 0; i < repeatAmount.length; i++) {
			console.log(repeatWord);
		}
	}
	res.send(runCommand());
});

//if any other route print:
//"Sorry, page not found...What are you doing with your life? "
app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
	console.log("App running on localhost:3000");
});
