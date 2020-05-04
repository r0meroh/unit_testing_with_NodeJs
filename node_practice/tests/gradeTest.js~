var book = require("../libby/first").book;


//add setup to initialize each test with it's own instance of a gradeBook
exports["setUp"] = function(callback){
	book.reset();
	callback();

};

//relocated to first test to check validity of assertion
exports["Can average grades"] = function(test){
	        book.addGrade(100);
	        book.addGrade(50);

	        var average = book.getAverage();

	        test.equal(average, 75);
	        test.done();

};




//used to be first test 
exports["can add new grade"] = function(test) {
	book.addGrade(90);
	var count = book.getCountOfGrades();
	test.equal(count, 1);

	test.done();
};
