// Assignment 23
let car = 'subaru';

// Test 1: Is car equal to 'subaru'?
console.log("Test 1: Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru'); // Prediction: True, because car is 'subaru'

// Test 2: Is car not equal to 'toyota'?
console.log("Test 2: Is car not equal to 'toyota'? I predict True.");
console.log(car != 'toyota'); // Prediction: True, because car is not 'toyota'

// Test 3: Is car equal to 'honda'?
console.log("Test 3: Is car equal to 'honda'? I predict False.");
console.log(car == 'honda'); // Prediction: False, because car is not 'honda'

// Test 4: Is car not equal to 'subaru'?
console.log("Test 4: Is car not equal to 'subaru'? I predict False.");
console.log(car != 'subaru'); // Prediction: False, because car is 'subaru'

// Test 5: Is car length equal to 6?
console.log("Test 5: Is car length equal to 6? I predict True.");
console.log(car.length == 6); // Prediction: True, because the length of 'subaru' is 6

// Test 6: Is car length less than 5?
console.log("Test 6: Is car length less than 5? I predict False.");
console.log(car.length < 5); // Prediction: False, because the length of 'subaru' is not less than 5

// Test 7: Is car starting with 's'?
console.log("Test 7: Does car start with 's'? I predict True.");
console.log(car.startsWith('s')); // Prediction: True, because car starts with 's'

// Test 8: Is car containing 'b'?
console.log("Test 8: Does car contain 'b'? I predict True.");
console.log(car.includes('b')); // Prediction: True, because car contains 'b'

// Test 9: Is car equal to 'SUBARU' (case-sensitive)?
console.log("Test 9: Is car equal to 'SUBARU' (case-sensitive)? I predict False.");
console.log(car === 'SUBARU'); // Prediction: False, because 'subaru' is not equal to 'SUBARU'

// Test 10: Is car not defined?
console.log("Test 10: Is car not defined? I predict False.");
console.log(typeof car === 'undefined'); // Prediction: False, because car is defined