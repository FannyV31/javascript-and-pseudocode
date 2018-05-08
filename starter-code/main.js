

var firstName = 'Fanny';
var age = 45;
var city = 'San Ramon';
var greeting = "Hi, I'm " + firstName + "," + " I'm " + age + " years old and live in " + city + "."
var greeting2 = `Hi, I'm ${firstName}, I am ${age} years old and live in ${city}.`

var side1 = 45;
var side2 = 90;
var side3 = (Math.pow(side1, 2)) + (Math.pow(side2, 2))

//a squared + b squared = c squared

/* The Math.max() function returns the largest of zero or more numbers.
console.log(Math.max(1, 3, 2));
// expected output: 3

The static function Math.min() returns the lowest-valued number passed into it,
or NaN if any parameter isn't a number and can't be converted into one.
console.log(Math.min(2, 3, 1));
// expected output: 1
*/
var highestNumber = 0;
var numbers = [20, 3, 5, 7, 13, 30];
var i;
for (i = 0; i < highestNumber.length; i++) {number += highestNumber[i] + "<br>";}
if (i < highestNumber.length) {
    highestNumber = i;
}
/*

The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
    code block to be executed
}

Example
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

From the example above, you can read:

Statement 1 sets a variable before the loop starts (var i = 0).

Statement 2 defines the condition for the loop to run (i must be less than 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.


	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/


/* Bonus
Take a look at the numbers array below. Use the pseudo code you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources.

Steps:
- First create a variable highestNumber and give it a value of the number 0.
- Then use a for loop(https://www.w3schools.com/js/js_loop_for.asp) to loop through the numbers array.
	Your for loop should look something like this:
	for (var i = 0; i < numbers.length; i++) {

	}
- Within the loop, use an if statement(https://www.w3schools.com/js/js_if_else.asp) to see if the current number (numbers[i]) is greater than the number that is currently stored in highestNumber.
- If so, save numbers[i] in the highestNumber variable.
	- Hint: you only need to use the var keyword when you initially set up a variable. To update a variable, simply use the variable name (highestNumber) followed by = followed by the new value (numbers[i]).
- After the for loop, log highestNumber to the console.
*/

var numbers = [20, 3, 5, 7, 13, 30];
