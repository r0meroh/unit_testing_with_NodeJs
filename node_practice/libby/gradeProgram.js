var book = require("./first").book;

var express = require("express");

var app = express();


app.get("/", function(req,res) {
	res.send("Hello, welcome to the gradeBook program.");
});


app.get("/grade", function (req,res) {

	let grades = req.query.grades.split(",");

	for(var x = 0; x < grades.length; x++){
		book.addGrade(parseInt(grades[x]));
	}

	let average = book.getAverage();
	let letter = book.getLetterGrade();

	res.send("Your average score is " + average + " = letter grade of : " + letter);
});


app.listen(3000);

console.log("Server ready...");


