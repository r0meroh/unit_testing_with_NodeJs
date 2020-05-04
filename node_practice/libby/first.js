//grade book program


var gradeBook = {
	_grades: [],
	
	//first function
	addGrade: function(newGrade){
		this._grades.push(newGrade);
	},
	
	//second function
	getCountOfGrades: function() {
		return this._grades.length;
	},

	//third function
	getAverage: function() {
		let sum = 0;
		for (x = 0; x < this._grades.length; x++){
			sum += this._grades[x];
		}
		return sum/this._grades.length;
	},

	//add reset function to clear gradeBook
	reset: function() {
		this._grades = [];
	}

};

exports.book = gradeBook;
