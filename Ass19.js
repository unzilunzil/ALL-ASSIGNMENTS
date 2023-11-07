"use strict";
// // Assignment 19
const placesToVisit1 = ["Paris", "switzerland", "New York", "Dubai", "Sydney"];
// Print the number of dinner guests
console.log("Number of dinner guests:", placesToVisit1.length);
// Print original order
console.log("Original order:", placesToVisit1);
// Print array in alphabetical order (without modifying original array)
const sortedAlphabetically = placesToVisit1.slice().sort();
console.log("Alphabetical order:", sortedAlphabetically);
// Print array to show it's still in original order
console.log("Original order:", placesToVisit1);
// Print array in reverse alphabetical order
const sortedReverseAlphabetically = placesToVisit1.slice().sort().reverse();
console.log("Reverse alphabetical order:", sortedReverseAlphabetically);
