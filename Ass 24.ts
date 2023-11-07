// Assignment 24
let string1 = 'apple';
let string2 = 'banana';
let number1 = 5;
let number2 = 10;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Test 11: Is string1 equal to 'apple'? I predict True.");
console.log(string1 == 'apple'); // Prediction: True

console.log("Test 12: Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // Prediction: True

// Tests using the lower case function
console.log("Test 13: Is string1 lowercase equal to 'apple'? I predict True.");
console.log(string1.toLowerCase() == 'apple'); // Prediction: True

// Numerical tests
console.log("Test 14: Is number1 greater than number2? I predict False.");
console.log(number1 > number2); // Prediction: False

console.log("Test 15: Is number1 less than or equal to number2? I predict True.");
console.log(number1 <= number2); // Prediction: True

// Tests using "and" and "or" operators
console.log("Test 16: Is number1 greater than 3 and number2 less than 15? I predict True.");
console.log(number1 > 3 && number2 < 15); // Prediction: True

console.log("Test 17: Is number1 greater than 7 or number2 less than 8? I predict True.");
console.log(number1 > 7 || number2 < 8); // Prediction: True

// Test whether an item is in an array
console.log("Test 18: Is 3 in the array? I predict True.");
console.log(array.includes(3)); // Prediction: True

// Test whether an item is not in an array
console.log("Test 19: Is 6 not in the array? I predict True.");
console.log(!array.includes(6)); // Prediction: True