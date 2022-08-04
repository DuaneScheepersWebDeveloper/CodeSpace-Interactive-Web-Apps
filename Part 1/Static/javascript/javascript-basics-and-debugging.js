console.log('\n\n ------- JS Basics and Debugging Challenge -------\n');

// The following 2 lines both have errors in them
console.log('Lesson 1: Logging a String to the console');
console.log('Hello World!');

console.log('\n');

// There is are 2 errors in the following lines
console.log('Lesson 2: This is how you create a variable:');
let number = 86;
console.log('number');

console.log('\n');

// The plus sign is not showing, debug this and have it appear inside the String
console.log('Lesson 3 is concatinating Strings using the ' + ' sign.');

// These variables are undefined and breaking the String that is using them
let concatString = ' one variable';
let concatVar = 'Second variable';
console.log(
	'You can concatenate ' +
		concatString +
		' into another ' +
		concatVar +
		' to log them into the console'
);
