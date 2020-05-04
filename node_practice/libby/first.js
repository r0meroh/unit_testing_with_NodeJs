//grade book program


var gradeBook = {
	_grades: [],
	
	//first function
	addGrade: function(newGrade){
		this._grades.push(newGrade);
	},

	//function to calculate a letter grade
	getLetterGrade: function() {
		let average = this.getAverage();
		if(average >= 90){
			return "A";
		}
		else if(average >= 80) {
			return "B";
		}
		else if(average >= 70) {
			return "C";
		}
		else if(average >= 60) {
			return "D";
		}
		return "F";
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
