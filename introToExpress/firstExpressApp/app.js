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
	var animal = req.params.animal.toLowerCase();
	var animalSound;
	var sounds = {
		dog: "woof",
		cat: "'i hate you human'",
		cow: "moo",
		pig: "oink",
		fish: "..."
	}
 
 animalSound = sounds[animal];

	res.send("The "+ animal + " says " + animalSound + ".");
})

//visiting "/repeat/hello/3" should print out "hello hello hello"
//visiting "/repeat/hello/5" should print out "hello hello hello hello hello"
//visiting "/repeat/blah/2" should print out "blah blah"
app.get("/repeat/:repeatWord/:repeatAmount", function(req, res){
		var repeatWord = req.params.repeatWord;
		var repeatAmount = Number(req.params.repeatAmount);
		var result = "";

		for (var i = 0; i < repeatAmount; i++) {
			result += repeatWord + " ";
		}
	
	res.send(result);
});

//if any other route print:
//"Sorry, page not found...What are you doing with your life? "
app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
	console.log("App running on localhost:3000");
});
