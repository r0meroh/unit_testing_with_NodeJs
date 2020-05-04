
# Using Test Driven Programming in Node.Js
*(written using **PowerShell** and **VIM** )*
---
---

## Creating a program using tests to write code
After using unit tests in Python, I wanted to see If I could take the concepts from that and apply them to Node.JS since that is what I am currently learning.
A popular program for Computer Software Engineering students is a simple *'GradeBook'*. This is a small program that creates an object called a gradeBook and takes in scores to store. Depending on the implementation of the program, the gradeBook may have a variety of functions to manipulate the input. 
Since this project of mine is to use *Test Driven Development*, I won't make a complex gradeBook object, but just a simple one using the *Test Driven Development* approach.

### First, **nodeunit** is installed from the *npm* 
nodeunit is the Node Module that I will use to implement my testing

![nodeunit](https://github.com/r0meroh/unit_testing_with_NodeJs/blob/master/node_practice/gradeBook_images/install_nodeUnit.PNG)


### I created the **Project Structure** in *powershell*
Using powershell I create the basic project structure for the repo and project itself. (hint *mkdir*)


![structure](https://github.com/r0meroh/unit_testing_with_NodeJs/blob/master/node_practice/gradeBook_images/making_project_structure.PNG)

### I create an empty object to get the program started
Because the program is to be built using the *Test Driven Development* approach, an empty object will suffice, which later on will have additions dictated by tests.

![empty](https://github.com/r0meroh/unit_testing_with_NodeJs/blob/master/node_practice/gradeBook_images/empty_initial_object.PNG)

### writing the first test
Here I had an idea for what I wanted the gradeBook object to initially do, add a grade. Keep in mind the gradeBook object is empty so as expected, the test fails. As we see below, I created a test named 'can add new grade' and it fails.

![first_fail](https://github.com/r0meroh/unit_testing_with_NodeJs/blob/master/node_practice/gradeBook_images/fail_on_purpose_two.PNG)

### Adding code to allow test to pass
So the concept is, come up with an idea that the object is to do, create a test to see if it's possible(which it shouldn't be in our case since we're making an object from scratch) and upon the test failing, figure out what is need to allow the test to pass successfully. 
So I implement what is necessary for the object to be able to take in and store a grade.
*To not spam this read me with images of the object code too much, I'll post it after the first set of tests are completed.*


![first](https://github.com/r0meroh/unit_testing_with_NodeJs/blob/master/node_practice/gradeBook_images/test_successful_after_first_change.PNG)

### Adding a Second Test
